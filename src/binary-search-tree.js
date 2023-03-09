const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/




class Node {
  constructor(data, left = null, right = null) {
    this.data = data,
      this.left = left,
      this.right = right
  }
}
class BinarySearchTree {
  constructor() {
    this.rootValue = null
  }
  root() {
    return this.rootValue
  }

  add(data) {
    let node = new Node(data)
    if (this.rootValue === null) {
      return this.rootValue = node
    }
    let current = this.rootValue
    while (current) {
      if (data < current.data) {
        if (current.left === null) return current.left = node
        current = current.left
      } else {
        if (current.right === null) return current.right = node
        current = current.right
      }
    }
  }

  has(data) {
    return Boolean(this.find(data))
  }

  find(data) {
    let current = this.rootValue
    while (current) {
      if (data === current.data) return current
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return current
  }

  remove(data) {
    let currentParent = this.rootValue
    let current = this.rootValue
    while (current) {
      if (data === this.rootValue.data) {
        let deleteNode = current
        // 1-й вариант, когда удаляется лист
        if (deleteNode.left === null && deleteNode.right === null) {
          return this.rootValue = null
        }
        // 2-й вариант, когда есть обе ветки, и самый левый элемент поддерева лист
        //и 3-й вариант, когда есть обве ветки, и самый левый элемент поддерева содержит ветку
        if (deleteNode.left !== null && deleteNode.right !== null) {
          let parentLefter = [deleteNode, deleteNode.right]

          while (parentLefter[1].left !== null) {
            parentLefter[0] = parentLefter[1]
            parentLefter[1] = parentLefter[1].left
          }
          console.log('самый левый', parentLefter)
          // левая или правая ветвь родителя
          if (parentLefter[0].left === parentLefter[1]) {
            parentLefter[0].left = parentLefter[1].right
          } else {
            parentLefter[0].right = parentLefter[1].right
          }
          this.rootValue = parentLefter[1]
          parentLefter[1].left = deleteNode.left
          parentLefter[1].right = deleteNode.right
          return

        }
        // 4-й вариант, когда 1 ветка
        else {
          return currentParent.left = deleteNode.left === null ? deleteNode.right : deleteNode.left
        }

      }

      if (data === current.data && currentParent.left === current) {
        let deleteNode = current
        // 1-й вариант, когда удаляется лист
        if (deleteNode.left === null && deleteNode.right === null) {
          return currentParent.left = null
        }
        // 2-й вариант, когда есть обе ветки, и самый левый элемент поддерева лист
        if (deleteNode.left !== null && deleteNode.right !== null) {
          let parentLefter = [deleteNode, deleteNode.right]
          while (parentLefter[1].left !== null) {
            parentLefter[0] = parentLefter[1]
            parentLefter[1] = parentLefter[1].left
          }

          // левая или правая ветвь родителя
          if (parentLefter[0].left === parentLefter[1]) {
            parentLefter[0].left = parentLefter[1].right
          } else {
            parentLefter[0].right = parentLefter[1].right
          }

          // проверка лепесток ли
          // if (parentLefter[1].right === null) {
          parentLefter[1].left = deleteNode.left
          parentLefter[1].right = deleteNode.right
          currentParent.left = parentLefter[1]
          return
          // }
          // else {
          //     // 3-й вариант, есть 2 ветки, самый левый элемент с веткой
          //     let tmpChildLefter = parentLefter[1].right
          //     parentLefter[1].left = deleteNode.left
          //     parentLefter[1].right = deleteNode.right
          //     currentParent.left = parentLefter[1]
          // }



        }
        // 4-й вариант, когда 1 ветка
        else {
          return currentParent.left = deleteNode.left === null ? deleteNode.right : deleteNode.left
        }

      }
      console.log(currentParent, current)
      if (data === current.data && currentParent.right === current) {

        let deleteNode = current
        // 1-й вариант, когда удаляется лист
        if (deleteNode.left === null && deleteNode.right === null) {
          console.log('remove 8')
          return currentParent.right = null
        }
        // 2-й вариант, когда есть обе ветки, и самый левый элемент поддерева лист
        if (deleteNode.left !== null && deleteNode.right !== null) {
          let parentLefter = [deleteNode, deleteNode.right]
          while (parentLefter[1].left !== null) {
            parentLefter[0] = parentLefter[1]
            parentLefter[1] = parentLefter[1].left
          }

          // левая или правая ветвь родителя
          if (parentLefter[0].left === parentLefter[1]) {
            parentLefter[0].left = parentLefter[1].right
          } else {
            parentLefter[0].right = parentLefter[1].right
          }

          // проверка лепесток ли
          // if (parentLefter[1].right === null) {
          parentLefter[1].left = deleteNode.left
          parentLefter[1].right = deleteNode.right
          currentParent.right = parentLefter[1]
          console.log(tree, currentParent, parentLefter)
          return
          // }
          // else {
          //     // 3-й вариант, есть 2 ветки, самый левый элемент с веткой
          //     let tmpChildLefter = parentLefter[1].right
          //     parentLefter[1].left = deleteNode.left
          //     parentLefter[1].right = deleteNode.right
          //     currentParent.left = parentLefter[1]
          // }



        }
        // 4-й вариант, когда 1 ветка
        else {
          return currentParent.right = deleteNode.left === null ? deleteNode.right : deleteNode.left
        }

      }
      console.log(currentParent, '1')
      if (data < current.data) {
        currentParent = current
        current = current.left
      } else {
        currentParent = current
        current = current.right
      }
      console.log(currentParent, '2')

    }
    return currentParent
  }

  min() {
    if (!this.rootValue) return this.rootValue
    let min = this.rootValue.data;
    let current = this.rootValue
    while (current) {
      if (min > current.data) min = current.data
      if (!current.left && !current.right) return min
      if (current.left) {
        current = current.left
      } else {
        current = current.right
      }
    }
  }

  max() {
    if (!this.rootValue) return this.rootValue
    let max = 0;
    let current = this.rootValue
    while (current) {
      if (max < current.data) max = current.data
      if (!current.left && !current.right) return max
      if (current.right) {
        current = current.right
      } else {
        current = current.left
      }
    }
  }
}
module.exports = {
  BinarySearchTree
};