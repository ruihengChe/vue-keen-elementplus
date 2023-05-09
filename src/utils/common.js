/**
 *深度优先遍历进行深拷贝适合对象的嵌套层级比较浅的情况
 * 因为它容易导致调用栈溢出
 * 但是如果对象的嵌套层级比较深，那么广度优先遍历的效率会更高
 * @param {*} obj
 * @returns
 */
export function deepCloneDFS(obj) {
    // 1. 判断是否是对象
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    // 2. 初始化结果
    const result = Array.isArray(obj) ? [] : {};
    // 3. 遍历
    for (let key in obj) {
        if (Array.isArray(obj)) { // 3.1 如果是数组
            result.push(deepCloneDFS(obj[key])); // 3.3 递归
        } else if (typeof obj[key] === "object" && obj[key] !== null) { // 3.2 如果是对象
            result[key] = deepCloneDFS(obj[key]); // 3.3 递归
        } else { // 3.3 如果是基本类型
            result[key] = obj[key]; // 3.4 赋值
        }
    }
    // 4. 返回结果
    return result;
}

/**
 * 
 * @param {*} obj 
 * @returns 
 * 广度优先遍历进行深拷贝适合对象的嵌套层级比较深的情况
 * 因为它不容易导致调用栈溢出
 * 但是如果对象的嵌套层级比较浅，那么深度优先遍历的效率会更高
 */
export function deepCloneBFS(obj) {
    // 广度优先
    // 1. 判断是否是对象
    if (typeof obj !== "object" || obj === null) {
        return obj;
    }
    // 2. 初始化结果
    const result = Array.isArray(obj) ? [] : {};
    // 3. 初始化队列
    const queue = [];
    // 4. 将对象放入队列
    queue.push(obj);
    // 5. 遍历队列
    while (queue.length) {
        // 5.1 取出队列中的第一个元素
        const current = queue.shift();
        // 5.2 遍历
        for (let key in current) {
            if (Array.isArray(current)) { // 5.3 如果是数组
                result.push(deepCloneBFS(current[key])); // 5.5 递归
            } else if (typeof current[key] === "object" && current[key] !== null) { // 5.4 如果是对象
                result[key] = deepCloneBFS(current[key]); // 5.5 递归
                queue.push(current[key]); // 5.6 将对象放入队列
            } else { // 5.5 如果是基本类型
                result[key] = current[key]; // 5.6 赋值
            }
        }
    }
    // 6. 返回结果
    return result;
}

export function promise() {
    console.log(1);
    new Promise(function (resolve) {
        console.log(2);
        setTimeout(function () {
            console.log(5);
            resolve();
        }, 2000);
    }).then(() => {
        console.log(4);
    });
    console.log(3);
}

export function promise2() {
    // async function async1() {
    //     console.log('async1 start');
    //     await async2();
    //     console.log('async1 end');
    // }
    // async function async2() {
    //     console.log('async2');
    // }
    // console.log('script start');
    // setTimeout(function () {
    //     console.log('setTimeout');
    // }, 0)
    // async1();
    // new Promise(function (resolve) {
    //     console.log('promise1');
    //     resolve();
    // }).then(function () {
    //     console.log('promise2');
    // });
    // console.log('script end');
    // new Promise(function (resolve) {
    //     console.log('promise3');
    //     resolve();
    // }).then(function () {
    //     console.log('promise4');
    // });
    //888888888888888
    console.log('同步任务1');

    setTimeout(() => {
        console.log('宏任务1');
        Promise.resolve().then(() => {
            console.log('微任务3');
        });
        Promise.resolve().then(() => {
            console.log('微任务4');
        });
    }, 0);

    setTimeout(() => {
        console.log('宏任务2');
        Promise.resolve().then(() => {
            console.log('微任务5');
        });
    }, 0);

    console.log('同步任务2');

    Promise.resolve().then(() => {
        console.log('微任务1');
    });

    Promise.resolve().then(() => {
        console.log('微任务2');
    });
}

// 编写一个程序将数组扁平化去并除其中重复部分数据，
// 最终得到一个升序且不重复的数组

// 将嵌套数组扁平化
// 1. 使用reduce方法
// 2. 使用concat方法
// 3. 使用扩展运算符
// 4. 使用toString方法
// 5. 使用join方法
// 6. 使用递归
// 7. 使用栈

// 去重
// 1. 使用Set
// 2. 使用indexOf
// 3. 使用includes
// 4. 使用filter
// 5. 使用reduce
// 6. 使用Map

// 排序
// 1. 使用sort方法
// 2. 使用冒泡排序
// 3. 使用快速排序
// 4. 使用插入排序
// 5. 使用归并排序
// 6. 使用堆排序
// 7. 使用计数排序
// 8. 使用桶排序
// 9. 使用基数排序
// 10. 使用Array.from
// 11. 使用Set
// 12. 使用Map
// 13. 使用reduce

function flatten(arr) {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

function unique(arr) {
    return Array.from(new Set(arr));
}

function sortAsc(arr) {
    return arr.sort((a, b) => a - b);
}

export function flattenAndUnique(arr) {
    // return sortAsc(unique(flatten(arr)));
    let flattenedArr = flatten(arr);
    let uniqueArr = unique(flattenedArr);
    let sortedArr = sortAsc(uniqueArr);
    console.log(sortedArr);
}
