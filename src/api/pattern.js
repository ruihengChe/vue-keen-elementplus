export function diff(newNode, oldNode) {
    if (newNode.type !== oldNode.type) {
        // 替换旧节点为新节点
        oldNode.el.replaceWith(newNode.render());
    } else {
        // 比较子节点
        const newChildren = newNode.children;
        const oldChildren = oldNode.children;
        const maxLength = Math.max(newChildren.length, oldChildren.length);

        for (let i = 0; i < maxLength; i++) {
            const newChild = newChildren[i];
            const oldChild = oldChildren[i];

            if (!oldChild) {
                // 添加新节点
                oldNode.el.appendChild(newChild.render());
            } else {
                // 比较节点
                if (newChild.type !== oldChild.type || newChild.key !== oldChild.key) {
                    // 替换旧节点为新节点
                    oldChild.el.replaceWith(newChild.render());
                } else {
                    // 比较属性
                    for (let attr in newChild.props) {
                        if (newChild.props[attr] !== oldChild.props[attr]) {
                            // 更新实际DOM以反映更改
                            oldChild.el.setAttribute(attr, newChild.props[attr]);
                        }
                    }

                    // 递归比较子节点
                    diff(newChild, oldChild);
                }
            }
        }
    }
}
export class EventBus {
    constructor() {
        this.events = {}
    }

    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = []
        }
        this.events[eventName].push(callback)
    }

    publish(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(callback => {
                callback(...args)
            })
        }
    }

    unsubscribe(eventName, callback) {
        if (this.events[eventName]) {
            const index = this.events[eventName].indexOf(callback)
            if (index > -1) {
                this.events[eventName].splice(index, 1)
            }
        }
    }
}