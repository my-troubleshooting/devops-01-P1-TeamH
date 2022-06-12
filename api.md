|카테고리|기능|메소드|엔드포인트|요청 바디|성공시 응답|
|---|---|---|---|---|---|
|조회|전체 상품 조회|Get|/product|X|{id: productid: category: sellerinfo: price: stock: ...}|
|조회|특정 상품 조회|Get|/product/:uid|X|{id: productid:uid category: sellerinfo: price: stock:}|
|조회|장바구니 조회|Get|/cart/:uid|X|{userid : uid productid : }|
|생성|상품 등록|Post|/product|{category : sellerinfo : price : stock : }|201|
|수정|상품 정보 수정|Post|/product/:pid|{productid : pid category : [수정사항] sellerinfo :[수정사항] price :[수정사항] stock :[수정사항] }|{Ok}|
|삭제|특정 상품 삭제|Delete|/product|{productid}|200|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |
