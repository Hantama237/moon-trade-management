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
                    <div class="stat-value" id="balance">0s</div>
                </div>
                <div class="stat">
                    <div class="stat-figure text-secondary">
                    </div>
                    <div class="stat-title">Profit</div>
                    <div class="stat-value" id="profit">0</div>
                    <div class="stat-desc">🔼 <span id="profit-percent">0</span>%</div>
                </div>
                <div class="stat">
                    <div class="stat-title">Loss</div>
                    <div class="stat-value" id="loss">0</div>
                    <div class="stat-desc">🔽 <span id="loss-percent">0</span>%</div>
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
                            <th>Sync</th>
                        </tr>
                    </thead>
                    <tbody id="trade-history">
                        <!-- row 1 -->
                        <tr class="hover:bg-sky-700">
                            <td class="text-center" colspan="5">No Trades Available</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="divider">New Trades</div>
            <label class="form-control w-full">

                <div class="flex justify-content-center">
                    <input class="input input-bordered w-1/2 mr-2 size-trigger" name="entry_price" type="number" placeholder="Entry price" />
                    <select class="select select-bordered w-1/2" name="symbol">
                        <option value="ETHUSDT">ETHUSDT</option>
                        <option value="BTCUSDT">BTCUSDT</option>
                        <option value="LTCUSDT">LTCUSDT</option>
                        <option selected value="BNBUSDT">BNBUSDT</option>
                    </select>
                </div>
            </label>

            <div class="flex justify-content-center">
                <label class="form-control w-1/2 pr-2">
                    <input class="input input-bordered w-full size-trigger" name="stop_loss_price" type="number" placeholder="SL Price" />
                </label>
                <label class="form-control w-1/2">
                    <input class="input input-bordered w-50" name="take_profit_price" type="number" value="0" placeholder="TP price" />
                </label>
            </div>
            <textarea class="textarea textarea-bordered" placeholder="Notes"></textarea>
            <div class="flex justify-between items-center mt-2">
                <div class="ml-1">
                    <span class="text-xs">Risk: <span id="risk">0</span></span>
                    <span class="text-xs">SL: <span id="distance">0</span>%</span><br>
                    <span class="font-semibold">Size: <span id="position-size">0</span></span>
                </div>
                <button class="btn btn-outline btn-sm mr-1" id="new-trade">Submit Order</button>
            </div>
        </div>
    </div>
</div>
`
const tradeHistoryTemplate = (trade_history)=> /*html*/
`
<tr class="hover:bg-sky-700">
    <td>${new Intl.DateTimeFormat('en-US').format(new Date(trade_history.entry_date))}</td>
    <td>${trade_history.symbol}</td>
    <td>${trade_history.entry_price}</td>
    <td>${(trade_history.realized_pnl + trade_history.fee).toFixed(4)}</td>
    <td>
        <button class="btn btn-circle btn-outline btn-xs" onclick="syncTrade(${trade_history.id},'${trade_history.symbol}',${trade_history.entry_date})">
            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.56079 10.6418L6.35394 3.94971L8.25402 5.84979C11.7312 3.6588 16.3814 4.07764 19.41 7.1063L17.9958 8.52052C15.7536 6.27827 12.3686 5.87519 9.71551 7.31128L11.2529 8.84869L4.56079 10.6418Z" fill="currentColor" />
                <path d="M19.4392 13.3581L17.646 20.0502L15.7459 18.1501C12.2688 20.3411 7.61857 19.9223 4.58991 16.8936L6.00413 15.4794C8.24638 17.7217 11.6313 18.1247 14.2844 16.6887L12.747 15.1512L19.4392 13.3581Z" fill="currentColor" />
            </svg>
        </button>
    </td>
</tr>
`
const showTrade = async () => {
    document.getElementById('app').innerHTML = tradeTemplate()
    await updateTradeSummary()
    await updateTradeHistory()
}
const updateTradeSummary = async ()=>{
    let summary = await client.service('trade').getAccountSummary()
    if(summary.success){
        $('#balance').text(summary.data.balance)
        $('#profit').text(summary.data.profit)
        $('#profit-percent').text(summary.data.profit_percent)
        $('#loss').text(summary.data.loss)
        $('#loss-percent').text(summary.data.loss_percent)
    }
}
const updateTradeHistory = async ()=>{
    let history = await client.service('trade').getTradeHistory()
    if(history.success){
        if( history.data.length > 0){
            let html = ``;
            for(let trade of history.data){
                html += tradeHistoryTemplate(trade);
            }
            $('#trade-history').html(html)
        }
    }
}
const syncTrade = async (id)=>{
    let sync = await client.service('trade').syncTrade(id)
    console.log(sync)
    if(sync.success){
        updateTradeHistory()
        updateTradeSummary()
    }else{
        alert(sync.message)
    }
}