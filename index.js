module.exports = function(el, content){
	if (typeof content == 'string') el.innerHTML = el.innerHTML + content;
	else el.appendChild(content);
	return el;
};

