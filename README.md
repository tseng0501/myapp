花費5~6小時

1 上面的表格：
- src/view/table 使用的是 Devextreme 套件模板

2 下面的表格：

- /src/view/detail 是顯示表格上方標題，以及從後端獲取資料傳遞給 List 元件。

    - 宣告一個變數 state ,setstate 更新 state 的資料
    
    - 第一個 useEffect 裡面包含兩個函式 ，因為後面接 [] 所以只會在第一次渲染被執行
    
    - fetchData 函式 是先從 https://api.github.com/users?page=10&per_page=100 中從api獲取回傳資料把它放在setstate 上
    
    - fetchLogin 函式，先宣告一個 array 陣列，使用 for 迴圈取出 username 放入 https://api.github.com/users/{username} API 中，取得回傳的資料，並把它 push 到 array 陣列，最後把它       更新到 setstate 上
    
    - 最後把資料做傳遞到 List 元件裡
   
- /src/component/list 是設計表格裡內容的樣板，接收父級傳遞的參數 list
