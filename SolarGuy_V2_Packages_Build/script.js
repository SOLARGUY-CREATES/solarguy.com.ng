document.addEventListener('DOMContentLoaded',()=>{const nav=document.querySelector('.nav');const menu=document.querySelector('.menu');if(menu&&nav)menu.addEventListener('click',()=>nav.classList.toggle('open'));const form=document.querySelector('#quoteForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const msg=`Hello Solar Guy, I'd like to request a quote.

Name: ${d.get('name')||''}
Phone: ${d.get('phone')||''}
Location: ${d.get('location')||''}
Property: ${d.get('property')||''}
Package/Solution: ${d.get('solution')||''}
Additional information: ${d.get('message')||''}`;window.open('https://wa.me/2348067593407?text='+encodeURIComponent(msg),'_blank')})}});