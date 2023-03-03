import SearchPanel from '../search-panel/search-panel';
import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form'

import './app.css';

function App(){
    return (
        <div className="app">
            <AppInfo></AppInfo>
            <div className="search-panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>                
            </div>
            <EmployeesList></EmployeesList>
            <EmployeesAddForm></EmployeesAddForm>
        </div>
    )
}

export default App;