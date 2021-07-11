import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import Product from "./components/product";
import "./dashboard.css";
import data from "./data";
import Test from "./components/Test";
import AlertDanger from "./components/AlertDanger";
import AlertSuccess from "./components/AlertSuccess";

export default function App() {
    // const bgDanger = "red";
    // const bgSuccess = "blue";
    // return (
    //     <div className="App">
    //         {/* <h1>Hello World</h1>
    //         <h2>asffwedaw</h2>
    //         <Test />
    //         <AlertDanger background={bgDanger}/>
    //         <AlertSuccess background={bgSuccess}/> */}

    //         <div>
    //             <Header />
    //             <div className="container-fluid">
    //                 <div className="row">
    //                     <Nav />
    //                     <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    //                         <Product />
    //                     </main>
    //                 </div>
    //             </div>
    //         </div>

    //     </div>
    const [products, setProducts] = useState(data);
    function onHandleRemove(id) {
        const newProduct = products.filter((item) => item.id !== id);
        setProducts(newProduct);
    }
    return (
        <div className="App">
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <Nav />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                            <Product products={products} onRemove={onHandleRemove} />
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}
// function App() {
//     return <Test />;
// }

// export default App;