import {Component} from 'react'

import Loader from 'react-loader-spinner'

import './index.css'

import VaccinationByAge from '../VaccinationByAge'

import VaccinationByGender from '../VaccinationByGender'

import VaccinationCoverage from '../VaccinationCoverage'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failure: 'FAILURE',
  success: 'SUCCESS',
}

class CowinDashboard extends Component {
  state = {vaccinationData: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVaccinationData()
  }

  getVaccinationData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    /*  const options = {
      method: 'GET',
    } */
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()

      const caseConvertedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }

      const last7DaysVaccination = caseConvertedData.last7DaysVaccination.map(
        obj => ({
          vaccineDate: obj.vaccine_date,
          dose1: obj.dose_1,
          dose2: obj.dose_2,
        }),
      )
      const finalProcessedData = {
        last7DaysVaccination,
        vaccinationByAge: caseConvertedData.vaccinationByAge,
        vaccinationByGender: caseConvertedData.vaccinationByGender,
      }
      this.setState({
        apiStatus: apiStatusConstants.success,
        vaccinationData: finalProcessedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoader = () => (
    <div testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failureView-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png "
        alt="failure view"
        className="failure-img"
      />
      <h1 className="failure-heading">Something went wrong</h1>
    </div>
  )

  renderSuccessView = () => {
    const {vaccinationData} = this.state
    return (
      <div className="main-container">
        <VaccinationCoverage data={vaccinationData.last7DaysVaccination} />
        <VaccinationByGender data={vaccinationData.vaccinationByGender} />
        <VaccinationByAge data={vaccinationData.vaccinationByAge} />
      </div>
    )
  }

  render() {
    const {apiStatus} = this.state

    let result
    switch (apiStatus) {
      case apiStatusConstants.success:
        result = this.renderSuccessView()
        break
      case apiStatusConstants.failure:
        result = this.renderFailureView()
        break
      case apiStatusConstants.inProgress:
        result = this.renderLoader()
        break

      default:
        result = null
        break
    }

    return (
      <div className="bg-container">
        <div className="website-logo-name-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="web-logo"
          />
          <p className="website-name">Co-Win</p>
        </div>
        <div className="heading-container">
          <h1 className="heading-2">CoWIN Vaccination in India</h1>
        </div>
        {result}
      </div>
    )
  }
}

export default CowinDashboard
