export function getFlatMenuList (menuList) {
    const newMenuList = JSON.parse(JSON.stringify(menuList))
    return newMenuList.flatMap(item => [item, ...(item.children ? getFlatMenuList(item.children) : [])])
}
