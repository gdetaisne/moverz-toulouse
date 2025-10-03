import React, { useEffect, useRef } from 'react';

interface MovingAnalyzerProps {
  title?: string;
  description?: string;
  className?: string;
  iframeUrl?: string;
}

export default function MovingAnalyzer({ 
  title = "🤖 Analyse de votre déménagement",
  description = "Estimez votre volume en 30 secondes",
  className = "",
  iframeUrl = "{{IFRAME_IA_URL}}"
}: MovingAnalyzerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Auto-resize iframe selon le contenu
    const resizeIframe = () => {
      if (iframeRef.current) {
        try {
          const iframe = iframeRef.current;
          iframe.style.height = iframe.contentWindow?.document.body.scrollHeight + 'px';
        } catch (error) {
          // Ignore CORS errors
          console.log('Iframe resize blocked by CORS');
        }
      }
    };

    // Écouter les messages de l'iframe
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === 'resize' && iframeRef.current) {
        iframeRef.current.style.height = event.data.height + 'px';
      }
    };

    window.addEventListener('message', handleMessage);
    
    // Resize initial
    const timer = setTimeout(resizeIframe, 1000);
    
    return () => {
      window.removeEventListener('message', handleMessage);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className={`moving-analyzer-container ${className}`}>
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-white/90 text-lg">
          {description}
        </p>
      </div>
      
      <iframe
        ref={iframeRef}
        id="moving-analyzer"
        src={iframeUrl}
        className="moving-analyzer-iframe"
        title="Analyse pour déménagement"
        allow="camera; microphone"
      >
        <p>Votre navigateur ne supporte pas les iframes.</p>
      </iframe>
    </section>
  );
}
