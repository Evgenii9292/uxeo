import type { ButtonHTMLAttributes, CSSProperties } from 'react';
import './RaisedButton.css';

export function RaisedButton({ children, className = '', tone = 'orange', style, ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'orange' | 'green' | 'gray' }) {
  const colors = {orange:['#ff6b21','#c24226'],green:['#00bb3c','#668562'],gray:['#404d52','#1b2428']}[tone];
  return <button {...props} className={`raised-button ${className}`} style={{'--raised-face':colors[0],'--raised-base':colors[1],...style} as CSSProperties}><span className="raised-button-face">{children}</span></button>;
}
