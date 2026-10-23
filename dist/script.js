const form=document.querySelector('#consultForm');
form?.addEventListener('submit',e=>{e.preventDefault();const name=new FormData(form).get('name');form.querySelector('.form-success').textContent=`Cảm ơn ${name || 'bạn'}! Bao An Education sẽ liên hệ sớm.`;form.reset();});
document.querySelector('.menu')?.addEventListener('click',()=>{const nav=document.querySelector('.nav');nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='70px';nav.style.left='0';nav.style.right='0';nav.style.padding='20px 6vw';nav.style.background='#fbfaf6';nav.style.flexDirection='column';});


