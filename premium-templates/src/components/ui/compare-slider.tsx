"use client";

import { cn } from "@/lib/utils";
import { MoveHorizontal } from "lucide-react";
import React, { useState, useRef, useEffect, useCallback } from "react";

interface CompareSliderProps {
    beforeImage: string;
    afterImage: string;
    className?: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export const CompareSlider = ({
    beforeImage,
    afterImage,
    className,
    beforeLabel = "Before",
    afterLabel = "After",
}: CompareSliderProps) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback(
        (event: MouseEvent | TouchEvent) => {
            if (!isDragging || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const x = "touches" in event ? event.touches[0].clientX : event.clientX;
            const position = ((x - rect.left) / rect.width) * 100;

            setSliderPosition(Math.min(100, Math.max(0, position)));
        },
        [isDragging]
    );

    const handleCreate = useCallback(() => {
        document.addEventListener("mousemove", handleMove);
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("mouseup", () => setIsDragging(false));
        document.addEventListener("touchend", () => setIsDragging(false));

        return () => {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("touchmove", handleMove);
            document.removeEventListener("mouseup", () => setIsDragging(false));
            document.removeEventListener("touchend", () => setIsDragging(false));
        };
    }, [handleMove]);

    useEffect(() => {
        if (isDragging) {
            handleCreate();
        }
    }, [isDragging, handleCreate]);

    return (
        <div
            ref={containerRef}
            className={cn("relative w-full overflow-hidden rounded-xl select-none cursor-ew-resize group", className)}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
        >
            {/* After Image (Background) */}
            <img
                src={afterImage}
                alt="After"
                className="absolute top-0 left-0 h-full w-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/50 px-2 py-1 text-xs text-white rounded backdrop-blur-sm z-10">
                {afterLabel}
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute top-0 left-0 h-full w-full overflow-hidden"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
                <img
                    src={beforeImage}
                    alt="Before"
                    className="absolute top-0 left-0 h-full w-full object-cover max-w-none"
                    // Crucial: max-w-none ensures the image doesn't shrink when the container is clipped
                    style={{ width: containerRef.current?.offsetWidth || '100%' }}
                />
                <div className="absolute top-4 left-4 bg-black/50 px-2 py-1 text-xs text-white rounded backdrop-blur-sm">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 group-hover:bg-white/80 transition-colors"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <MoveHorizontal className="h-4 w-4 text-black" />
                </div>
            </div>
        </div>
    );
};
