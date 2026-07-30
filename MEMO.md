# MEMO

- 最後一個 (last) 往前插
- 要紀錄 currentIndex
- 要拿得出動態 last、current
  - loop 之後放進 arr
    - last
      - arr[arrLength - 1]
        - arr[arrLength - 1 -1] => 下一個 last
          - Same thing looping..
      - 可簡化成 arrLength - 1 = endIndex , arr[endIndex]
        - arr[endIndex--] => 下一個 last
    - current
      - arr[currentIndex]
        - arr[currentIndex++]
- 間隔一個插入
  - arr[index].next = last
  - last.next = current [index +1]
- 數量
  - 奇數可以完美插入
  - 偶數只能插 數量 / 2-1 次

## Examples

### 1

|     | curr |
| --- | ---- |
|     | 1    |

---

### 1 2

|     | curr | next |
| --- | ---- | ---- |
|     | 1    | 2    |

---

### 1 2 3

A: 132
current = arr0
last = arr2
arr0.next = arr1
arr1.next = arr2

=>
current.next = arr2



|        | curr | next |     |
| ------ | ---- | ---- | --- |
| arr[0] | 1    | 2    | (3) |
| arr[1] | 2    | 3    |     |
| arr[2] | 3    |      |     |

---

### 1 2 3 4

A: 1423
|        | curr | next |     |     |
| ------ | ---- | ---- | --- | --- |
| arr[0] | 1    | 2    | 3   | (4) |
| arr[1] | 2    | 3    | 4   |     |
| arr[2] | 3    | 4    |     |     |
| arr[3] | 4    |      |     |     |

---

### 1 2 3 4 5

A: 15243
|        | curr | next |     |     |     |
| ------ | ---- | ---- | --- | --- | --- |
| arr[0] | 1    | 2    | 3   | 4   | (5) |
| arr[1] | 2    | 3    | 4   | 5   |     |
| arr[2] | 3    | 4    | 5   |     |     |
| arr[3] | 4    | 5    |     |     |     |
| arr[4] | 5    |      |     |     |     |

---

### 1 2 3 4 5 6

A: 162534
|        | curr | next |     |     |     |     |
| ------ | ---- | ---- | --- | --- | --- | --- |
| arr[0] | 1    | 2    | 3   | 4   | 5   | (6) |
| arr[1] | 2    | 3    | 4   | 5   | 6   |     |
| arr[2] | 3    | 4    | 5   | 6   |     |     |
| arr[3] | 4    | 5    | 6   |     |     |     |
| arr[4] | 5    | 6    |     |     |     |     |
| arr[5] | 6    |      |     |     |     |     |
