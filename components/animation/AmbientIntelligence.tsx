"use client";

import { useEffect, useRef } from "react";

export default function AmbientIntelligence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let w=0,h=0,t=0,raf=0;

    const resize=()=>{
      const dpr=window.devicePixelRatio||1;
      w=canvas.clientWidth; h=canvas.clientHeight;
      canvas.width=w*dpr; canvas.height=h*dpr;
      ctx.setTransform(dpr,0,0,dpr,0,0);
    };
    resize();
    window.addEventListener("resize",resize);

    const render=()=>{
      t+=0.008;
      ctx.clearRect(0,0,w,h);

      const cols=70, rows=26;
      const sx=w/(cols-1), sy=h/(rows-1);

      for(let y=0;y<rows;y++){
        ctx.beginPath();
        for(let x=0;x<cols;x++){
          const px=x*sx;
          const py=y*sy+Math.sin(x*0.22+t)*10+Math.cos(y*0.35+t*0.7)*6;
          x===0?ctx.moveTo(px,py):ctx.lineTo(px,py);
        }
        ctx.strokeStyle="rgba(80,220,255,0.18)";
        ctx.lineWidth=1;
        ctx.stroke();
      }

      for(let y=0;y<rows;y++){
        for(let x=0;x<cols;x++){
          const px=x*sx;
          const py=y*sy+Math.sin(x*0.22+t)*10+Math.cos(y*0.35+t*0.7)*6;
          const glow=(Math.sin(t*2+x*0.3+y*0.2)+1)/2;
          ctx.beginPath();
          ctx.arc(px,py,1.2+glow,0,Math.PI*2);
          ctx.fillStyle=`rgba(180,245,255,${0.15+glow*0.45})`;
          ctx.fill();
        }
      }

      raf=requestAnimationFrame(render);
    };
    render();

    return()=>{
      cancelAnimationFrame(raf);
      window.removeEventListener("resize",resize);
    };
  },[]);

  return(
    <div className="relative h-[560px] w-full overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,217,255,0.12),transparent_70%)]"/>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full"/>
    </div>
  );
}
