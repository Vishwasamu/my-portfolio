// src/components/CodeAnimationBackground.jsx
import React, { useEffect, useRef } from 'react';

const CodeAnimationBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    let connections = [];
    let matrixRain = [];
    let mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track mouse for interactive effects
    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Advanced character set with various symbols
    const codeChars = '01<>{}[]()/\\=+-*&%$#@!~`|:;.,?';
    const binaryChars = '01';
    const techChars = '⌘⌃⌥⇧⌫⌦⎋⇪⇥⇤⌤⌨⌱⌲⌳⌴⌵⌶⌷⌸⌹⌺⌻⌼⌽⌾⌿⍀⍁⍂⍃⍄⍅⍆⍇⍈⍉⍊⍋⍌⍍⍎⍏⍐⍑⍒⍓⍔⍕⍖⍗⍘⍙⍚⍛⍜⍝⍞⍟⍠⍡⍢⍣⍤⍥⍦⍧⍨⍩⍪⍫⍬⍭⍮⍯⍰';

    // ============================================ //
    // 1. MATRIX RAIN DROPS                        //
    // ============================================ //
    class MatrixDrop {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -20 - Math.random() * canvas.height;
        this.speed = 2 + Math.random() * 4;
        this.length = 10 + Math.random() * 20;
        this.chars = [];
        this.opacity = 0.05 + Math.random() * 0.1;
        this.column = Math.floor(this.x / 20);
        this.step = 0;
        this.maxStep = 200 + Math.random() * 300;

        for (let i = 0; i < this.length; i++) {
          this.chars.push({
            char: binaryChars[Math.floor(Math.random() * binaryChars.length)],
            opacity: 0.1 + Math.random() * 0.3
          });
        }
      }

      update() {
        this.y += this.speed;
        this.step++;

        // Randomly change chars for flicker effect
        if (Math.random() < 0.05) {
          const idx = Math.floor(Math.random() * this.chars.length);
          this.chars[idx].char = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        }

        if (this.y > canvas.height + 50 || this.step > this.maxStep) {
          this.reset();
        }
      }

      draw() {
        for (let i = 0; i < this.chars.length; i++) {
          const yPos = this.y - i * 16;
          if (yPos < -20) continue;

          const opacity = this.chars[i].opacity * this.opacity * (1 - i / this.chars.length);
          const isHead = i === 0;
          
          ctx.fillStyle = isHead 
            ? `rgba(100, 255, 200, ${opacity * 2})` 
            : `rgba(0, 150, 255, ${opacity})`;
          ctx.font = '14px "Courier New", monospace';
          ctx.fillText(this.chars[i].char, this.x, yPos);

          // Glow effect on head
          if (isHead) {
            ctx.shadowColor = 'rgba(0, 200, 255, 0.3)';
            ctx.shadowBlur = 20;
            ctx.fillText(this.chars[i].char, this.x, yPos);
            ctx.shadowBlur = 0;
          }
        }
      }
    }

    // ============================================ //
    // 2. FLOATING PARTICLES WITH CODE CHARS       //
    // ============================================ //
    class CodeParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 8 + Math.random() * 14;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.char = codeChars[Math.floor(Math.random() * codeChars.length)];
        this.opacity = 0.1 + Math.random() * 0.3;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotSpeed = (Math.random() - 0.5) * 0.02;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
        this.isTechChar = Math.random() > 0.7;
        if (this.isTechChar) {
          this.char = techChars[Math.floor(Math.random() * techChars.length)];
        }
        this.trail = [];
        this.maxTrail = 3;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.rotation += this.rotSpeed;
        this.pulse += this.pulseSpeed;

        // Trail
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrail) {
          this.trail.shift();
        }

        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        // Mouse interaction - slight attraction
        if (mouse.x !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 0.2;
            this.speedX += dx * force * 0.01;
            this.speedY += dy * force * 0.01;
          }
        }

        // Speed limits
        const maxSpeed = 1.5;
        const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);
        if (currentSpeed > maxSpeed) {
          this.speedX = (this.speedX / currentSpeed) * maxSpeed;
          this.speedY = (this.speedY / currentSpeed) * maxSpeed;
        }
      }

      draw() {
        const pulseOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));

        // Draw trail
        for (let i = 0; i < this.trail.length; i++) {
          const trailOpacity = (i / this.trail.length) * pulseOpacity * 0.3;
          ctx.fillStyle = `rgba(0, 150, 255, ${trailOpacity})`;
          ctx.font = `${this.size * 0.6}px "Courier New", monospace`;
          ctx.fillText(this.char, this.trail[i].x, this.trail[i].y);
        }

        // Draw main char
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        
        // Glow
        ctx.shadowColor = `rgba(0, 200, 255, ${pulseOpacity * 0.3})`;
        ctx.shadowBlur = 20;
        
        // Color based on char type
        let color;
        if (this.isTechChar) {
          color = `rgba(200, 100, 255, ${pulseOpacity})`;
        } else if (this.char === '0' || this.char === '1') {
          color = `rgba(100, 255, 200, ${pulseOpacity})`;
        } else {
          color = `rgba(0, 150, 255, ${pulseOpacity})`;
        }
        
        ctx.fillStyle = color;
        ctx.font = `${this.size}px "Courier New", monospace`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.char, 0, 0);
        
        // Extra glow for special chars
        if (this.isTechChar) {
          ctx.shadowBlur = 40;
          ctx.shadowColor = `rgba(200, 100, 255, ${pulseOpacity * 0.2})`;
          ctx.fillText(this.char, 0, 0);
        }
        
        ctx.restore();
      }
    }

    // ============================================ //
    // 3. CONNECTION LINES WITH CODE NODES         //
    // ============================================ //
    class CodeConnection {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.opacity = 0;
        this.maxOpacity = 0.15;
        this.pulseOffset = Math.random() * Math.PI * 2;
      }

      update(time) {
        const dx = this.p1.x - this.p2.x;
        const dy = this.p1.y - this.p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;
        
        if (distance < maxDistance) {
          const baseOpacity = this.maxOpacity * (1 - distance / maxDistance);
          const pulse = 0.6 + 0.4 * Math.sin(time * 0.001 + this.pulseOffset);
          this.opacity = baseOpacity * pulse;
        } else {
          this.opacity = 0;
        }
      }

      draw(time) {
        if (this.opacity > 0.01) {
          const grad = ctx.createLinearGradient(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
          grad.addColorStop(0, `rgba(0, 150, 255, ${this.opacity * 0.5})`);
          grad.addColorStop(0.5, `rgba(100, 200, 255, ${this.opacity})`);
          grad.addColorStop(1, `rgba(0, 150, 255, ${this.opacity * 0.5})`);
          
          ctx.beginPath();
          ctx.moveTo(this.p1.x, this.p1.y);
          ctx.lineTo(this.p2.x, this.p2.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Animated dash effect
          if (this.opacity > 0.05) {
            ctx.setLineDash([5, 10]);
            ctx.lineDashOffset = -time * 0.05;
            ctx.strokeStyle = `rgba(0, 200, 255, ${this.opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.setLineDash([]);
          }
        }
      }
    }

    // ============================================ //
    // 4. BINARY RAIN BACKGROUND                    //
    // ============================================ //
    class BinaryRain {
      constructor() {
        this.columns = Math.floor(canvas.width / 20);
        this.drops = [];
        for (let i = 0; i < this.columns; i++) {
          this.drops.push({
            y: Math.random() * canvas.height,
            speed: 1 + Math.random() * 3,
            length: 5 + Math.random() * 15,
            chars: [],
            opacity: 0.03 + Math.random() * 0.05
          });
          const drop = this.drops[i];
          for (let j = 0; j < drop.length; j++) {
            drop.chars.push({
              char: Math.random() > 0.5 ? '1' : '0',
              brightness: 0.2 + Math.random() * 0.8
            });
          }
        }
      }

      update() {
        for (const drop of this.drops) {
          drop.y += drop.speed;
          
          // Randomly change chars
          if (Math.random() < 0.03) {
            const idx = Math.floor(Math.random() * drop.chars.length);
            drop.chars[idx].char = Math.random() > 0.5 ? '1' : '0';
          }

          if (drop.y > canvas.height + 50) {
            drop.y = -drop.length * 16;
            drop.speed = 1 + Math.random() * 3;
          }
        }
      }

      draw() {
        for (const drop of this.drops) {
          for (let i = 0; i < drop.chars.length; i++) {
            const yPos = drop.y - i * 16;
            if (yPos < -20 || yPos > canvas.height) continue;
            
            const isHead = i === 0;
            const opacity = drop.opacity * (isHead ? 2 : 0.5 + 0.5 * (1 - i / drop.chars.length));
            const brightness = drop.chars[i].brightness;
            
            ctx.fillStyle = isHead
              ? `rgba(100, 255, 200, ${opacity * 2})`
              : `rgba(0, 150, 255, ${opacity * brightness})`;
            ctx.font = '12px "Courier New", monospace';
            ctx.fillText(drop.chars[i].char, drop.index * 20, yPos);
          }
        }
      }
    }

    // ============================================ //
    // 5. CIRCUIT NODES                            //
    // ============================================ //
    class CircuitNode {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 2 + Math.random() * 4;
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.02 + Math.random() * 0.03;
        this.connections = [];
        this.opacity = 0.1 + Math.random() * 0.2;
        this.angle = Math.random() * Math.PI * 2;
        this.targetAngle = this.angle;
        this.speed = 0.01 + Math.random() * 0.02;
        this.isActive = Math.random() > 0.7;
      }

      update() {
        this.pulse += this.pulseSpeed;
        this.angle += this.speed;
        
        // Slight movement
        this.x += Math.sin(this.angle) * 0.2;
        this.y += Math.cos(this.angle) * 0.2;
        
        if (this.x < 0 || this.x > canvas.width) this.angle = Math.PI - this.angle;
        if (this.y < 0 || this.y > canvas.height) this.angle = -this.angle;
      }

      draw(time) {
        const pulseRadius = this.radius * (0.8 + 0.2 * Math.sin(this.pulse));
        const opacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
        
        // Glow
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, pulseRadius * 4);
        grad.addColorStop(0, `rgba(0, 200, 255, ${opacity * 0.8})`);
        grad.addColorStop(0.5, `rgba(0, 150, 255, ${opacity * 0.3})`);
        grad.addColorStop(1, `rgba(0, 150, 255, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseRadius * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(100, 255, 200, ${opacity * 0.8})`;
        ctx.shadowColor = `rgba(0, 200, 255, ${opacity * 0.5})`;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(this.x, this.y, pulseRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Inner ring
        if (this.isActive) {
          ctx.strokeStyle = `rgba(0, 200, 255, ${opacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.arc(this.x, this.y, pulseRadius * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }

    // ============================================ //
    // 6. DATA STREAMS (Animated text ribbons)     //
    // ============================================ //
    class DataStream {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = -50 - Math.random() * 200;
        this.speed = 1 + Math.random() * 2;
        this.length = 15 + Math.random() * 30;
        this.chars = [];
        this.opacity = 0.02 + Math.random() * 0.04;
        this.width = 12 + Math.random() * 8;
        this.angle = (Math.random() - 0.5) * 0.3;
        
        for (let i = 0; i < this.length; i++) {
          this.chars.push({
            char: codeChars[Math.floor(Math.random() * codeChars.length)],
            brightness: 0.3 + Math.random() * 0.7
          });
        }
      }

      update() {
        this.y += this.speed;
        this.x += Math.sin(this.y * 0.01) * 0.2;
        
        if (Math.random() < 0.02) {
          const idx = Math.floor(Math.random() * this.chars.length);
          this.chars[idx].char = codeChars[Math.floor(Math.random() * codeChars.length)];
        }

        if (this.y > canvas.height + 100) {
          this.reset();
        }
      }

      draw() {
        const alpha = Math.min(1, (this.y + 50) / 100) * (1 - Math.max(0, (this.y - canvas.height + 50) / 100));
        if (alpha <= 0) return;

        for (let i = 0; i < this.chars.length; i++) {
          const yPos = this.y + i * this.width;
          if (yPos < -20 || yPos > canvas.height + 20) continue;
          
          const progress = i / this.chars.length;
          const opacity = this.opacity * this.chars[i].brightness * (1 - progress * 0.5) * alpha;
          
          ctx.fillStyle = `rgba(0, 180, 255, ${opacity})`;
          ctx.font = `${this.width}px "Courier New", monospace`;
          ctx.fillText(this.chars[i].char, this.x + Math.sin(yPos * 0.02) * 2, yPos);
        }
      }
    }

    // ============================================ //
    // INITIALIZE ALL SYSTEMS                      //
    // ============================================ //
    
    // Matrix Rain
    const matrixDrops = [];
    for (let i = 0; i < 30; i++) {
      matrixDrops.push(new MatrixDrop());
    }

    // Code Particles
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      particles.push(new CodeParticle());
    }

    // Connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        connections.push(new CodeConnection(particles[i], particles[j]));
      }
    }

    // Binary Rain
    const binaryRain = new BinaryRain();

    // Circuit Nodes
    const circuitNodes = [];
    for (let i = 0; i < 15; i++) {
      circuitNodes.push(new CircuitNode());
    }

    // Data Streams
    const dataStreams = [];
    for (let i = 0; i < 8; i++) {
      dataStreams.push(new DataStream());
    }

    // ============================================ //
    // ANIMATION LOOP                              //
    // ============================================ //
    let time = 0;

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw Binary Rain (background layer)
      binaryRain.update();
      binaryRain.draw();

      // Draw Data Streams
      dataStreams.forEach(stream => {
        stream.update();
        stream.draw();
      });

      // Draw Circuit Nodes
      circuitNodes.forEach(node => {
        node.update();
        node.draw(time);
      });

      // Draw Matrix Rain
      matrixDrops.forEach(drop => {
        drop.update();
        drop.draw();
      });

      // Draw Particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // Draw Connections
      connections.forEach(c => {
        c.update(time);
        c.draw(time);
      });

      // Draw connection glow around mouse
      if (mouse.x !== null) {
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        grad.addColorStop(0, 'rgba(0, 200, 255, 0.02)');
        grad.addColorStop(1, 'rgba(0, 200, 255, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    // ============================================ //
    // CLEANUP                                     //
    // ============================================ //
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.7,
      }}
    />
  );
};

export default CodeAnimationBackground;