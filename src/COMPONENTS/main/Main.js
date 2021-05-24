import React from 'react'
import './Main.css'
import Chart from '../charts/Chart'

function Main() {
    return (
        <main>
            <div className="main-container"> 
               <div className="main-title">
                   <div className="main-greeting">
                       <h1>Hello Enterpreneur</h1>
                       <p>Welcome to your admin dashboard</p>

                   </div>

               </div>

               <div className="main-cards">

                   <div className="cards">
                       <i className="fa fa-user-0 fa-2x text-lightblue"></i>
                       <div className="card_inner">
                          <p className = "text-primary-p">Number of Customers</p>
                          <span className="font-bold text-title">578</span>
                       </div>
                   </div>

                   <div className="cards">
                       <i className="fa fa-user-0 fa-2x text-lightblue"></i>
                       <div className="card_inner">
                          <p className = "text-primary-p">Total Sales</p>
                          <span className="font-bold text-title">GHC 5,500,000</span>
                       </div>
                   </div>

                   <div className="cards">
                       <i className="fa fa-user-0 fa-2x text-lightblue"></i>
                       <div className="card_inner">
                          <p className = "text-primary-p">Total Products</p>
                          <span className="font-bold text-title">GHC 5,000,000</span>
                       </div>
                   </div>

                   <div className="cards">
                       <i className="fa fa-user-0 fa-2x text-lightblue"></i>
                       <div className="card_inner">
                          <p className = "text-primary-p">Total Purchases</p>
                          <span className="font-bold text-title">GHC 4,000,000</span>
                       </div>
                   </div>

               </div>

               <div className="charts">

                   <div className="charts-left">
                      <div className="charts-left-title">
                          <div>
                             <h1>Daily Sales</h1>
                             <p>Accra, Kumasi, Tamale, Takoradi</p>
                          </div>
                          <i className="fa fa-usd"></i>
                      </div>
                      <Chart />

                  </div>

                  <div className="charts-right">
                      <div className="charts-right-title">
                          <div>
                             <h1>Sales Report</h1>
                             <p>Accra, Kumasi, Tamale, Takoradi</p>
                          </div>
                          <i className="fa fa-use"></i>
                      </div>

                      <div className="charts-right-cards">
                          <div className="card1">
                              <h1>Stock</h1>
                              <p>GHC 8,000,000.00</p>

                          </div>

                          <div className="card2">
                              <h1>Orders</h1>
                              <p>3200</p>

                          </div>

                          <div className="card3">
                              <h1>Debtors</h1>
                              <p>GHC 2,000,000.00</p>

                          </div>

                          <div className="card4">
                              <h1>receipts</h1>
                              <p>GHC 3,000,000</p>

                          </div>
                      </div>

                  </div>

                   

               </div>

               


            </div>
            
        </main>
    )
}

export default Main
