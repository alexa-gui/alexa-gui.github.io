import{V as h,a as i,b as o}from"./prod-WohM6EBV.js";import"./app-WkD0NKcG.js";const u=/,/g,c="-->";class n extends h{parse(s,e){var a,r;if(s==="")this.a&&(this.j.push(this.a),(r=(a=this.f).onCue)==null||r.call(a,this.a),this.a=null),this.c=i.None;else if(this.c===i.Cue)this.a.text+=(this.a.text?`
`:"")+s;else if(s.includes(c)){const t=this.o(s,e);t&&(this.a=new o(t[0],t[1],t[2].join(" ")),this.a.id=this.l,this.c=i.Cue)}this.l=s}o(s,e){return super.o(s.replace(u,"."),e)}}function p(){return new n}export{n as SRTParser,p as default};
