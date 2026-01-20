"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

interface VortexProps {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
    particleCount?: number;
    rangeY?: number;
    baseHue?: number;
    baseSpeed?: number;
    rangeSpeed?: number;
    baseRadius?: number;
    rangeRadius?: number;
    backgroundColor?: string;
}

export const Vortex = ({
    children,
    className,
    containerClassName,
    particleCount = 700,
    rangeY = 100,
    baseHue = 220,
    baseSpeed = 0.0,
    rangeSpeed = 1.5,
    baseRadius = 1,
    rangeRadius = 2,
    backgroundColor = "#000000",
}: VortexProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const particlePropCount = 9;
    const particlePropsLength = particleCount * particlePropCount;
    const rangeYRef = useRef(rangeY);
    const baseSpeedRef = useRef(baseSpeed);
    const rangeSpeedRef = useRef(rangeSpeed);
    const baseRadiusRef = useRef(baseRadius);
    const rangeRadiusRef = useRef(rangeRadius);
    const noise3D = createNoise3D();
    let particleProps = new Float32Array(particlePropsLength);
    let center: [number, number] = [0, 0];
    let tick = 0;
    let rafId: number;

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            const { innerWidth, innerHeight } = window;
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            center = [0.5 * canvas.width, 0.5 * canvas.height];
        };

        const initParticles = () => {
            tick = 0;
            particleProps = new Float32Array(particlePropsLength);
            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                initParticle(i);
            }
        };

        const initParticle = (i: number) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            let x, y, vx, vy, life, ttl, speed, radius, hue;

            x = Math.random() * canvas.width;
            y = center[1] + (Math.random() * 2 - 1) * rangeYRef.current;
            vx = 0;
            vy = 0;
            life = 0;
            ttl = 50 + Math.random() * 1500;
            speed = baseSpeedRef.current + Math.random() * rangeSpeedRef.current;
            radius = baseRadiusRef.current + Math.random() * rangeRadiusRef.current;
            hue = baseHue + Math.random() * 100;

            particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
        };

        const drawParticles = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            tick++;
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particlePropsLength; i += particlePropCount) {
                updateParticle(i, ctx);
            }

            rafId = requestAnimationFrame(drawParticles);
        };

        const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            let i2 = 1 + i,
                i3 = 2 + i,
                i4 = 3 + i,
                i5 = 4 + i,
                i6 = 5 + i,
                i7 = 6 + i,
                i8 = 7 + i,
                i9 = 8 + i;
            let x, y, vx, vy, life, ttl, speed, radius, hue;

            x = particleProps[i];
            y = particleProps[i2];
            vx = particleProps[i3];
            vy = particleProps[i4];
            life = particleProps[i5];
            ttl = particleProps[i6];
            speed = particleProps[i7];
            radius = particleProps[i8];
            hue = particleProps[i9];

            const n = noise3D(x * 0.0025, y * 0.0025, tick * 0.0005) * 0.5 * Math.PI; // Vortex noise
            vx = Math.cos(n) * speed;
            vy = Math.sin(n) * speed;

            // Swirl effect around center
            const dx = x - center[0];
            const dy = y - center[1];
            const dist = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx);
            // Add tangential component for swirl
            vx += Math.sin(angle + Math.PI / 2) * 0.5 * (dist / 1000);
            vy -= Math.cos(angle + Math.PI / 2) * 0.5 * (dist / 1000);
            // Gravity towards center
            vx -= Math.cos(angle) * 0.5;
            vy -= Math.sin(angle) * 0.5;


            x += vx;
            y += vy;
            life++;

            if (life > ttl || x < 0 || x > canvas.width || y < 0 || y > canvas.height) {
                initParticle(i);
                x = particleProps[i];
                y = particleProps[i2];
                life = 0;
            }

            ctx.save();
            ctx.lineCap = "round";
            ctx.lineWidth = radius;
            ctx.strokeStyle = `hsla(${hue},100%,60%,${Math.sin(Math.PI * (life / ttl)) * 0.2})`;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x + vx * 2, y + vy * 2); // Trail
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

            particleProps[i] = x;
            particleProps[i2] = y;
            particleProps[i3] = vx;
            particleProps[i4] = vy;
            particleProps[i5] = life;
        };

        window.addEventListener("resize", resize);
        resize();
        initParticles();
        drawParticles();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(rafId);
        };
    }, [particleCount, backgroundColor, baseHue]);

    return (
        <div className={cn("relative h-full w-full overflow-hidden", containerClassName)} ref={containerRef}>
            <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full" />
            <div className={cn("relative z-10", className)}>{children}</div>
        </div>
    );
};
