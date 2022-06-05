import Tarjeta from "./Tarjeta"
import { render, screen, fireEvent, waitFor} from "@testing-library/react"
import {BrowserRouter, BrowserRouter as Router, Switch, useLocation} from "react-router-dom";
import {renderHook} from "@testing-library/react-hooks"
import {useProduct} from "../../pages/Products/ProductsList/ProductsList"


const products =[
    {
        "title": "Mens Casual Premium Slim Fit T-Shirts",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "id": 2,
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        }
      ,
      {
        "title": "Mens Cotton JacketCAMBIOO2",
        "price": 55.99,
        "id": 3,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      
        } 
]


describe("Tarjeta", ()=>{

    it("debe recibir los datos de la api", ()=>{
        const mockFunction = jest.fn(()=>products)
        
        render(<BrowserRouter>
                    <Tarjeta 
                    productos={mockFunction()}
                    inputValue=""
                    />
                </BrowserRouter>
        )
    expect(mockFunction).toHaveBeenCalledTimes(1);
    })

    it("debe mostrar tantas instancias de Product como cantidad de productos provistos", ()=>{
        const mockFunction = jest.fn(()=>products)
        
        render(<BrowserRouter>
                    <Tarjeta 
                    productos={mockFunction()}
                    inputValue=""
                    />
                </BrowserRouter>
        )
    expect(screen.getAllByTestId("product-item")).toHaveLength(2)
    screen.debug()
    })





})