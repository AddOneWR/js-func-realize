class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  // 插入
  insert(data) {
    let n = new Node(data, null, null);
    if(this.root == null) {
      this.root = n;
      return;
    }

    let current = this.root;
    let parent = null;
    while(true) {
      parent = current;
      if(data < parent.data) {
        current = current.left;
        if(!current) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if(!current) {
          parent.right = n;
          break;
        }
      }
    }
  }

  // 获取最大值
  getMax() {
    let current = this.root;
    while(current.right) {
      current = current.right;
    }

    return current.data;
  }

  // 获取最小值
  getMin() {
    let current = this.root;
    while(current.left) {
      current = current.left;
    }

    return current.data;
  }

  // 查找特定值
  find(data) {
    let current = this.root;
    while(current) {
      if(data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  // 移除指定值
  remove(data) {
    this.root = this.removeNode(this.root, data);
    return this;
  }

  removeNode(root, data) {
    if(!root) return null;
    if(data === root.data) {
      if(!root.left && !root.right) {
        return null;
      }

      if(!root.left) {
        return root.right;
      }

      if(!root.right) {
        return root.left;
      }

      let tempNode = this.getMin(root.right); // 拿到右子树
      root.data = tempNode.data // 右子树最小值赋值给删除的节点
      root.right = this.removeNode(root.right, tempNode.data); // 删除指定节点
      return root;
    } else if (data < root.data) {
      root.left = this.removeNode(root.left, data);
      return root;
    } else {
      root.right = this.removeNode(root.right, data);
      return root;
    }
  }
}