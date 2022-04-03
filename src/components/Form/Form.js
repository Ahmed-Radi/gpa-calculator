import React, { useState } from "react";
import styled from "styled-components";

function Form() {
    const [inputs, setInputs] = useState({
        oldGpa: 0,
        oldHours: 0,
        firstHour: 0,
        secondHour: 0,
        thirdHour: 0,
        fourthHour: 0,
        fifthHour: 0,
        sixthHour: 0,
        seventhHour: 0,
        firstPoint: 0,
        secondPoint: 0,
        thirdPoint: 0,
        fourthPoint: 0,
        fifthPoint: 0,
        sixthPoint: 0,
        seventhPoint: 0
    });
    const [GPA, setGPA] = useState(0)

    const handleInputs = (event) => {
        // destructuring the object
        let { target } = event;
        let { name, value } = target;
        setInputs(prevState => ({
            ...prevState,
            [name] : +value
        }))
    }
    const calculate = () => {
        const totalSubjectPoint = ((inputs.firstHour*inputs.firstPoint) + (inputs.secondHour*inputs.secondPoint) + (inputs.thirdHour*inputs.thirdPoint) + (inputs.fourthHour*inputs.fourthPoint) + (inputs.fifthHour*inputs.fifthPoint) + (inputs.sixthHour*inputs.sixthPoint) + (inputs.seventhHour*inputs.seventhPoint))
        const totalNewHours = (inputs.firstHour + inputs.secondHour + inputs.thirdHour + inputs.fourthHour + inputs.fifthHour + inputs.sixthHour + inputs.seventhHour)
        const oldResult = (inputs.oldGpa * inputs.oldHours)
        const Result = ((oldResult + totalSubjectPoint) / (totalNewHours + inputs.oldHours))
        setGPA(Result)
    }
	const onSubmit = e => {
        e.preventDefault();
        calculate()
	};

	return (
		<FormContent>
			<div className='container'>
                <h1>Calculate your GPA</h1>
				<div className='row'>
					<form onSubmit={e => onSubmit(e)}>
						<div className='new-data'>
                            <Label htmlFor='old-gpa'>
								<span>Old GPA:</span>
								<input
									type='number'
                                    name="oldGpa"
									id='old-gpa'
                                    min="0"
                                    max="4"
                                    step="any"
									placeholder='please enter old GPA'
									onChange={e => handleInputs(e)}
								/>
							</Label>
							<Label htmlFor='old-hour'>
								<span>Old Hours:</span>
								<input
									type='number'
                                    name="oldHours"
									id='old-hour'
                                    min="0"
                                    max="144"
									placeholder='please enter old Hours'
									onChange={e => handleInputs(e)}
								/>
							</Label>
							<Label htmlFor='first-subject'>
								<span>First Subject:</span>
                                <select name="firstPoint" onChange={e => handleInputs(e)}>
                                    <option value="0">-</option>
                                    <option value="4">A+</option>
                                    <option value="3.75">A</option>
                                    <option value="3.4">B+</option>
                                    <option value="3.1">B</option>
                                    <option value="2.75">C+</option>
                                    <option value="2.5">C</option>
                                    <option value="2.2">D+</option>
                                    <option value="2">D</option>
                                    <option value="1">F</option>
                                </select>
								<input
									type='number'
									id='first-subject'
                                    name="firstHour"
									placeholder='Credits hours'
                                    min="0"
                                    max="3"
									onChange={e => handleInputs(e)}
                                />
							</Label>
							<Label htmlFor='second-subject'>
								<span>second Subject:</span>
                                <select name="secondPoint" onChange={e=> handleInputs(e)}>
                                    <option value="0">-</option>
                                    <option value="4">A+</option>
                                    <option value="3.75">A</option>
                                    <option value="3.4">B+</option>
                                    <option value="3.1">B</option>
                                    <option value="2.75">C+</option>
                                    <option value="2.5">C</option>
                                    <option value="2.2">D+</option>
                                    <option value="2">D</option>
                                    <option value="1">F</option>
                                </select>
								<input
									type='number'
									id='second-subject'
                                    name="secondHour"
									placeholder='Credits hours'
                                    min="0"
                                    max="3"
									onChange={e => handleInputs(e)}
                                />
							</Label>
							<Label htmlFor='thread-subject'>
								<span>third subject:</span>
                                <select name="thirdPoint" onChange={e=>handleInputs(e)}>
                                    <option value="0">-</option>
                                    <option value="4">A+</option>
                                    <option value="3.75">A</option>
                                    <option value="3.4">B+</option>
                                    <option value="3.1">B</option>
                                    <option value="2.75">C+</option>
                                    <option value="2.5">C</option>
                                    <option value="2.2">D+</option>
                                    <option value="2">D</option>
                                    <option value="1">F</option>
                                </select>
								<input
									type='number'
									id='thread-subject'
                                    name="thirdHour"
									placeholder='Credits hours'
                                    min="0"
                                    max="3"
									onChange={e => handleInputs(e)}
                                />
							</Label>
							<Label htmlFor='fourth-subject'>
								<span>fourth subject:</span>
                                <select name="fourthPoint" onChange={e=>handleInputs(e)}>
                                    <option value="0">-</option>
                                    <option value="4">A+</option>
                                    <option value="3.75">A</option>
                                    <option value="3.4">B+</option>
                                    <option value="3.1">B</option>
                                    <option value="2.75">C+</option>
                                    <option value="2.5">C</option>
                                    <option value="2.2">D+</option>
                                    <option value="2">D</option>
                                    <option value="1">F</option>
                                </select>
								<input
									type='number'
									id='fourth-subject'
                                    name="fourthHour"
									placeholder='Credits hours'
                                    min="0"
                                    max="3"
									onChange={e => handleInputs(e)}
								/>
							</Label>
							<Label htmlFor='fifth-subject'>
								<span>fifth subject:</span>
                                <select name="fifthPoint" onChange={e=> handleInputs(e)}>
                                    <option value="0">-</option>
                                    <option value="4">A+</option>
                                    <option value="3.75">A</option>
                                    <option value="3.4">B+</option>
                                    <option value="3.1">B</option>
                                    <option value="2.75">C+</option>
                                    <option value="2.5">C</option>
                                    <option value="2.2">D+</option>
                                    <option value="2">D</option>
                                    <option value="1">F</option>
                                </select>
								<input
									type='number'
									id='fifth-subject'
                                    name="fifthHour"
									placeholder='Credits hours'
                                    min="0"
                                    max="3"
									onChange={e => handleInputs(e)}
                                />
							</Label>
							<Label htmlFor='sixth-subject'>
								<span>sixth subject:</span>
                                <select name="sixthPoint" onChange={e=> handleInputs(e)}>
                                    <option value="0">-</option>
                                    <option value="4">A+</option>
                                    <option value="3.75">A</option>
                                    <option value="3.4">B+</option>
                                    <option value="3.1">B</option>
                                    <option value="2.75">C+</option>
                                    <option value="2.5">C</option>
                                    <option value="2.2">D+</option>
                                    <option value="2">D</option>
                                    <option value="1">F</option>
                                </select>
								<input
									type='number'
									id='sixth-subject'
                                    name="sixthHour"
									placeholder='Credits hours'
                                    min="0"
                                    max="3"
									onChange={e => handleInputs(e)}
                                />
							</Label>
							<Label htmlFor='seventh-subject'>
								<span>seventh subject:</span>
                                <select name="seventhPoint" onChange={e=> handleInputs(e)}>
                                    <option value="0">-</option>
                                    <option value="4">A+</option>
                                    <option value="3.75">A</option>
                                    <option value="3.4">B+</option>
                                    <option value="3.1">B</option>
                                    <option value="2.75">C+</option>
                                    <option value="2.5">C</option>
                                    <option value="2.2">D+</option>
                                    <option value="2">D</option>
                                    <option value="1">F</option>
                                </select>
								<input
									type='number'
									id='seventh-subject'
                                    name="seventhHour"
									placeholder='Credits Hours'
                                    min="0"
                                    max="3"
									onChange={e => handleInputs(e)}
                                />
							</Label>
						</div>
                            <Button type='submit'>Submit</Button>
					</form>
				</div>
                <GPAResult>
                    <p>your GPA: {GPA > 0 ? <span>{GPA.toFixed(3)}</span> : GPA ? GPA === undefined : 0 }</p>
                </GPAResult>
			</div>
		</FormContent>
	);
}

export default Form;

const FormContent = styled.div`
	margin: 50px 0;
	padding: 20px;
    .new-data {
        display: flex;
        flex-wrap: wrap;
    }
    h1 {
        margin-bottom: 20px;
    }
    @media (max-width: 320px) {
        h1 {
            font-size: 20px;
        }
    }
`;
const Label = styled.label`
	margin-bottom: 20px;
	display: block;
    width: 50%;
	span {
		width: 140px;
		color: #333c83;
		display: inline-block;
		text-transform: capitalize;
	}
    select,
    input {
        border: 1px solid #ababab38;
		border-radius: 5px;
		padding: 10px;
		margin-right: 10px;
        &:focus {
			outline: none;
        }
    }
	input {
        width: 221.6px;
		&:focus {
			::placeholder {
				color: #00b4d8;
				padding-left: 5px;
				transition: all 0.5s ease-in-out;
			}
		}
		::placeholder {
			text-transform: capitalize;
			transition: all 0.5s ease-in-out;
		}
	}
    @media (max-width: 426px) {
        width: 100%;
        select,
        input {
            width: 100%;
            margin-bottom: 10px;
        }
    }
    @media (min-width: 425px) and (max-width: 768px) {
        #old-gpa,
        #old-hour {
            width: 65%;
        }
        width: 100%;
        display: flex;
        select,
        input {
            width: 221.6px;
        }
    }
    @media (min-width: 769px) and (max-width: 1199px) {
        #old-gpa,
        #old-hour {
            width: 65%;
        }
        input {
            margin-top: 10px;
        }
    }
    @media (min-width: 1200px) {
        #old-gpa,
        #old-hour {
            width: 46%;
        }
    }
`;
const Button = styled.button`
	width: 150px;
	padding: 10px;
	margin: 20px auto;
	display: flex;
	justify-content: center;
	font-size: 18px;
	color: #fff;
	letter-spacing: 1px;
	background: #00b4d8;
	border: none;
	border-radius: 5px;
	box-shadow: 4px 7px 9px 2px #000;
	transition: all 0.7s ease-in-out;
	&:hover {
		color: #fff;
		background: #000;
		box-shadow: 4px 7px 2px #00b4d8;
		transition: all 0.7s ease-in-out;
	}
`;
const GPAResult = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    font-size: 25px;
    p {
        text-transform: capitalize;
        span {
            color: #00b4d8;
        }
    }
`