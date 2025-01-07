import Card from "./components/Card";
import Header from "./components/header";
import products from './products.json';
import './style.css'

export default function App(){
  return(
    <>
    <Header/>
      <div className="container">
        {products.map((product,index)=>(
          <Card product={product} key={index}></Card>
        ))}
      </div>
    </>
  )
}