class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Agregar un nodo al final de la lista
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Eliminar un nodo de la lista
    remove(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                if (currentNode === this.head && currentNode === this.tail) {
                    this.head = null;
                    this.tail = null;
                } else if (currentNode === this.head) {
                    this.head = currentNode.next;
                    this.head.prev = null;
                } else if (currentNode === this.tail) {
                    this.tail = currentNode.prev;
                    this.tail.next = null;
                } else {
                    currentNode.prev.next = currentNode.next;
                    currentNode.next.prev = currentNode.prev;
                }
            }
            currentNode = currentNode.next;
        }
    }

    // Buscar un nodo en la lista
    search(value) {
        let currentNode = this.head;
        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }
        return null;
    }
}


const nuevaLista = new DoublyLinkedList();

nuevaLista.append("uno");
nuevaLista.append("two");
nuevaLista.append("3");

let nodoActual = nuevaLista.head;
while (nodoActual) {
    console.log(nodoActual.value);
    nodoActual = nodoActual.next;
}


// Obtener el contenedor donde se mostrarán los valores
const container = document.getElementById("tareas");

// Función para desplegar los valores en elementos <p>
function displayValues() {
    // Limpiar el contenedor antes de agregar nuevos elementos
    container.innerHTML = "";

    // Recorrer la lista y crear un elemento <p> para cada valor
    let currentNode = nuevaLista.head;
    while (currentNode) {
        const p = document.createElement("p");
        p.textContent = currentNode.value;
        container.appendChild(p);
        currentNode = currentNode.next;
    }
}

// Llamar a la función para desplegar los valores
displayValues();

/*document.addEventListener("DOMContentLoaded", function()){
    displayValues();
}*/