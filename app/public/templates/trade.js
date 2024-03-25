const tradeTemplate = ()=> /*html*/
`
<div class="navbar bg-base-300">
    <div class="navbar-start">
        <div class="dropdown">
            <div class="btn btn-ghost btn-circle" role="button" tabindex="0">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
            </div>
            <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52" tabindex="0">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
            </ul>
        </div>
    </div>
    <div class="navbar-center">
        <a class=" text-xl">Moon Trade Management</a>
    </div>
    <div class="navbar-end">
        <button class="btn btn-ghost btn-circle">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </button>
        <button class="btn btn-ghost btn-circle">
            <div class="indicator">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span class="badge badge-xs badge-primary indicator-item"></span>
            </div>
        </button>
    </div>
</div>

<div class="flex justify-center mt-5">

</div>
<div class="flex mt-5">
    <div class="card w-100 shadow glass mx-auto">
        <div class="card-body">
            <div class="stats shadow">
                <div class="stat">
                    <div class="stat-title">Balance</div>
                    <div class="stat-value">13.65</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-secondary">
                    </div>
                    <div class="stat-title">Profit</div>
                    <div class="stat-value">1.70</div>
                    <div class="stat-desc">↗︎ 0.20 (24%)</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Loss</div>
                    <div class="stat-value">1.00</div>
                    <div class="stat-desc">↘︎ 0.10 (14%)</div>
                </div>
            </div>
            <div class="divider">Recent Trades</div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Symbol</th>
                            <th>Price</th>
                            <th>P/L</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr class="hover:bg-sky-700">
                            <td><a href="#detail_modal" class="link">23 March, 10:36</a></td>
                            <td>ETHUSDT</td>
                            <td>3561.23</td>
                            <td>-0.20</td>
                        </tr>
                        <!-- row 1 -->
                        <tr class="hover:bg-sky-700">
                            <td><a href="#detail_modal" class="link">23 March, 10:36</a></td>
                            <td>ETHUSDT</td>
                            <td>3561.23</td>
                            <td>-0.20</td>
                        </tr>
                        <!-- row 1 -->
                        <tr class="hover:bg-sky-700">
                            <td><a href="#detail_modal" class="link">23 March, 10:36</a></td>
                            <td>ETHUSDT</td>
                            <td>3561.23</td>
                            <td>-0.20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="divider">New Trades</div>
            <label class="form-control w-full">
                
                <div class="flex justify-content-center">
                    <input class="input input-bordered w-1/2 mr-2 size-trigger" name="entry_price" type="number" placeholder="Entry price" />
                    <select class="select select-bordered w-1/2" name="symbol">
                        <option disabled selected>Choose symbol</option>
                        <option value="ETHUSDT">ETHUSDT</option>
                        <option value="BTCUSDT">ETHUSDT</option>
                        <option value="LTCUSDT">LTCUSDT</option>
                    </select>
                </div>
            </label>

            <div class="flex justify-content-center">
                <label class="form-control w-1/2 pr-2">
                    <input class="input input-bordered w-full size-trigger" name="stop_loss_price" type="number" placeholder="SL Price" />
                </label>
                <label class="form-control w-1/2">
                    <input class="input input-bordered w-50" name="take_profit_price" type="number" placeholder="TP price" />
                </label>
            </div>
            <textarea class="textarea textarea-bordered" placeholder="Notes"></textarea>
            <div class="flex justify-between items-center mt-2">
                <div class="ml-1">
                    <span class="text-xs">Risk: <span id="risk">0</span></span>
                    <span class="text-xs">SL: <span id="distance">0</span>%</span><br>
                    <span class="font-semibold">Size: <span id="position-size">0</span></span>
                </div>
                <button id="new-trade" class="btn btn-outline btn-sm mr-1">Submit Order</button>
            </div>
        </div>
    </div>
</div>
`
const showTrade = async () => {
 document.getElementById('app').innerHTML = tradeTemplate()
}
