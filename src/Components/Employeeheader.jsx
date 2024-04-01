import React from 'react'

export const Employeeheader = () => {
  return (
    <div>


<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">EmployeeApp</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="\">AddEmployee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\search">SearchEmployee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\delete">DeleteEmployee</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="\view">ViewEmployee</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


    </div>
  )
}
