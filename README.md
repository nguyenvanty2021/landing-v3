# Galatix Zone User Frontend

## Development

Install dependencies

```bash
yarn
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

Production optimization build

```bash
yarn build
```

prettierrc.json
	"arrowParens": "avoid", // arrow function phải có dấu ngoặc tròn
  "semi": false, // phải có dấu ; phía sau mỗi đoạn code
  "singleQuote": true, // dùng dấu nháy đơn thay vì dấu nháy kép
  "printWidth": 120, // kích thước width mỗi dòng là 120
dùng prettierignore và truyền vào những file mình không muốn prettier tác động đến

