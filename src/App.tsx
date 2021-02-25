import React, { Suspense, lazy } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const Audiences = lazy(() => import('./pages/Audiences/Audiences'))
const Campaigns = lazy(() => import('./pages/Campaigns'))

const App: React.FC = () => {
	return (
		<div id='app'>
			<Suspense fallback={<h1 className='loading'>Loading...</h1>}>
				<Switch>
					<Route path='/' exact>
						<Redirect to='/audiences' />
					</Route>
					<Route path='/audiences' exact component={Audiences} />
					<Route path='/campaigns' exact component={Campaigns} />
				</Switch>
			</Suspense>
		</div>
	)
}

export default App
