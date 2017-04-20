//次文件运用来了es6的写法
const STORAGE_KEY ="toods-vuejs"
export default({
	fetch(){
		return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]');

	},
	save(items){
		window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
	}
});