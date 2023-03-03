import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

function App(){

    const data = [
        {name: 'John C.', salary: 800, increase: false, id: 1},
        {name: 'Smith M.', salary: 1000, increase: true, id: 2},
        {name: 'Joe S.', salary: 1200, increase: false, id: 3}
    ]

    return (
        <div className="app">
            <AppInfo></AppInfo>
            <div className="search-panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>                
            </div>
            <EmployeesList data={data}></EmployeesList>
            <EmployeesAddForm></EmployeesAddForm>
        </div>
    )
}

export default App;