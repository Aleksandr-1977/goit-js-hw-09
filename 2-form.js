import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const r=document.querySelector(".feedback-form");let o={email:"",message:""};const s=()=>{try{if(e===null)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));o=e;for(const t in e)r.elements[t].value=e[t]}catch(e){console.log(e)}};s();const m=e=>{const{target:t}=e,a=t.value,l=t.name;o[l]=a,localStorage.setItem("feedback-form-state",JSON.stringify(o))},n=e=>{e.preventDefault();const{email:t,message:a}=o;if(!t.trim()||!a.trim()){alert("Fill please all fields");return}console.log(o),e.target.reset(),localStorage.removeItem("feedback-form-state")};r.addEventListener("input",m);r.addEventListener("submit",n);
//# sourceMappingURL=2-form.js.map
