import os
import requests
import re
import json
import time

def scrape_google_images_high_res(query, max_images=5, output_dir="public/images/google_scrape"):
    """
    Improved scraper to find high-resolution images from Google.
    Attempts to extract the 'big' image URL from the JSON data blobs embedded in the HTML.
    """
    
    print(f"Searching for HIGH RES images for query: {query}")
    
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36",
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
    }
    
    params = {
        "q": query,
        "tbm": "isch",
        "hl": "en", 
        "gl": "us",
        "iar": "w" # wide images preference
    }
    
    url = "https://www.google.com/search"
    
    try:
        response = requests.get(url, params=params, headers=headers)
        response.raise_for_status()
        html = response.text
        
        # Google stores main high-res details in _AF_initDataCallback blocks or similar scripts.
        # We look for the pattern [height, width, "http..."]
        # A common pattern for the original URL is: "http[^"]+",\d+,\d+
        # But specifically, we are looking for the 'ou' (original url) key equivalent in the modern dense JSON.
        
        # Regex to find http links that look like full images (not starting with google/gstatic)
        # This is strictly heuristic. 
        # We look for patterns like: ["http://example.com/image.jpg", height, width]
        
        # Let's try to find all http/https urls that end in .jpg/.png within the script tags
        # and are NOT encrytped-tbn0 (thumbnails).
        
        image_urls = []
        
        # Pattern for typical image URLs in the JSON structure
        # We capture URLs that end with common image extensions
        regex = r'(http[^"]+(?:jpg|jpeg|png))'
        
        candidates = re.findall(regex, html)
        
        for url in candidates:
            # Decode unicode
            url = urlencode_decode(url)
            
            # Filter
            if 'gstatic' in url or 'google' in url: continue
            if 'favicon' in url: continue
            
            # Additional heuristic: length. High res urls often aren't super short or super cryptic
            image_urls.append(url)
            
        # Dedupe
        image_urls = list(set(image_urls))
        print(f"Found {len(image_urls)} candidate high-res URLs.")
        
        count = 0
        for img_url in image_urls:
            if count >= max_images:
                break
                
            try:
                print(f"Attempting download {count+1}: {img_url[:60]}...")
                
                # Fetch headers first to check content type/size if we wanted to be strict
                # But let's just try to download
                r_img = requests.get(img_url, headers=headers, timeout=5)
                
                if r_img.status_code == 200:
                    # Check size - ignore tiny images (thumbnails/icons)
                    if len(r_img.content) < 10000: # Less than 10kb
                        print(" Skipping - too small (likely thumbnail/icon)")
                        continue
                        
                    ext = "jpg"
                    if ".png" in img_url.lower(): ext = "png"
                    
                    filename = f"{output_dir}/image_{count + 1}.{ext}"
                    with open(filename, 'wb') as f:
                        f.write(r_img.content)
                        
                    print(f" Saved High-Res: {filename}")
                    count += 1
                else:
                    print(f" Failed status: {r_img.status_code}")
                    
            except Exception as e:
                print(f" Failed download: {e}")
                
        print(f"Done. Downloaded {count} images.")

    except Exception as e:
        print(f"Scraper Error: {e}")

def urlencode_decode(url):
    # Search results often have unicode escapes like \u003d -> =
    return url.encode().decode('unicode-escape')

if __name__ == "__main__":
    scrape_google_images_high_res("ArnO Boulangerie Nantes bakery bread", max_images=5, output_dir="../public/images/google_scrape")
