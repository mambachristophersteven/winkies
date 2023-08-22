"use client";
import Menubar from '@/components/menubar/Menubar';

export default function PageLayout({active, children, className}) {
  return (
    <div className={className} style={{paddingBottom: 100}}>
        {children}
        <Menubar active={active}/>
    </div>
  );
};
