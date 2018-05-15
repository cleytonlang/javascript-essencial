"use strict";
//buscar campo de input e focar o cursor
var item = document.querySelector("input#item");
item.focus();

var btnCliente = document.querySelector("button#btn-array");
//acionar evento de click do botão
btnCliente.onclick = function(e) {
    e.preventDefault();

    if (item.value.trim() != '') {
        //criando um elemento li
        var li = document.createElement("li");
        //adicionando o texto digitado no input ao elemento li
        var textli = document.createTextNode(item.value);
        li.appendChild(textli);

        var ul = document.querySelector("#lista-item");
        //adicionando o elemento li no elemento ul
        ul.appendChild(li);

        item.value = '';
        item.focus();
    } else {
        item.focus();
    }
}

var btnLimpar = document.querySelector("#btn-limpar");
btnLimpar.onclick = function() {
    var li = document.querySelectorAll("li");
    Array.prototype.forEach.call(li, function(node) {
        node.parentNode.removeChild(node);
    });
}