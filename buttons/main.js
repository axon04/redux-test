const buttonStore = document.getElementById("buttonStore");
for(let i=0; i < 20; i++){
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.innerHTML = `${i+1}`;
    buttonStore.appendChild(btn);
}