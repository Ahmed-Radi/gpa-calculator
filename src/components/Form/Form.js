import React, { useState } from "react";
import styled from "styled-components";

function Form() {
	const [OldGpa, setOldGpa] = useState(0);
	const [oldHours, setOldHours] = useState(0);

    const [firstHour, setFirstHour] = useState(0);
	const [secondHour, setSecondHour] = useState(0);
	const [threadHour, setThreadHour] = useState(0);
	const [fourthHour, setFourthHour] = useState(0);
	const [fifthHour, setFifthHour] = useState(0);
	const [sixthHour, setSixthHour] = useState(0);
	const [seventhHour, setSeventhHour] = useState(0);

    const [firstPoint, setFirstPoint] = useState(0)
    const [secondPoint, setSecondPoint] = useState(0)
    const [threadPoint, setThreadPoint] = useState(0)
    const [fourthPoint, setFourthPoint] = useState(0)
    const [fifthPoint, setFifthPoint] = useState(0)
    const [sixthPoint, setSixthPoint] = useState(0)
    const [seventhPoint, setSeventhPoint] = useState(0)

    const [GPA, setGPA] = useState(0)

    const calculate = () => {
        const totalSubjectPoint = ((firstHour*firstPoint) + (secondHour*secondPoint) + (threadHour*threadPoint) + (fourthHour*fourthPoint) + (fifthHour*fifthPoint) + (sixthHour*sixthPoint) + (seventhHour*seventhPoint))
        const totalNewHours = (firstHour+ secondHour + threadHour + fourthHour + fifthHour + sixthHour + seventhHour)
        const oldResult = (OldGpa * oldHours)
        const Result = ((oldResult + totalSubjectPoint) / (totalNewHours + oldHours))
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
									id='old-gpa'
                                    min="0"
                                    max="4"
                                    step="any"
									placeholder='please enter old GPA'
									onChange={e => setOldGpa(+e.target.value)}
								/>
							</Label>
							<Label htmlFor='old-hour'>
								<span>Old Hours:</span>
								<input
									type='number'
									id='old-hour'
                                    min="0"
                                    max="144"
									placeholder='please enter old Hours'
									onChange={e => setOldHours(+e.target.value)}
								/>
							</Label>
							<Label htmlFor='first-subject'>
								<span>First Subject:</span>
                                <select onChange={e=>setFirstPoint(+e.target.value)}>
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
									placeholder='Credits hours'
                                    max="3"
                                    min="0"
									onChange={e => setFirstHour(+e.target.value)}
                                />
							</Label>
							<Label htmlFor='second-subject'>
								<span>second Subject:</span>
                                <select onChange={e=>setSecondPoint(+e.target.value)}>
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
									placeholder='Credits hours'
                                    max="3"
                                    min="0"
									onChange={e => setSecondHour(+e.target.value)}
                                />
							</Label>
							<Label htmlFor='thread-subject'>
								<span>thread subject:</span>
                                <select onChange={e=>setThreadPoint(+e.target.value)}>
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
									placeholder='Credits hours'
                                    max="3"
                                    min="0"
									onChange={e => setThreadHour(+e.target.value)}
                                />
							</Label>
							<Label htmlFor='fourth-subject'>
								<span>fourth subject:</span>
                                <select onChange={e=>setFourthPoint(+e.target.value)}>
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
									placeholder='Credits hours'
                                    max="3"
                                    min="0"
									onChange={e => setFourthHour(+e.target.value)}
								/>
							</Label>
							<Label htmlFor='fifth subject'>
								<span>fifth subject:</span>
                                <select onChange={e=> setFifthPoint(+e.target.value)}>
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
									id='fifth subject'
									placeholder='Credits hours'
                                    max="3"
                                    min="0"
									onChange={e => setFifthHour(+e.target.value)}
                                />
							</Label>
							<Label htmlFor='sixth-subject'>
								<span>sixth subject:</span>
                                <select onChange={e=> setSixthPoint(+e.target.value)}>
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
									placeholder='Credits hours'
                                    max="3"
                                    min="0"
									onChange={e => setSixthHour(+e.target.value)}
                                />
							</Label>
							<Label htmlFor='seventh-subject'>
								<span>seventh subject:</span>
                                <select onChange={e=> setSeventhPoint(+e.target.value)}>
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
									placeholder='Credits Hours'
                                    max="3"
                                    min="0"
									onChange={e => setSeventhHour(+e.target.value)}
                                />
							</Label>
						</div>
						<Button type='submit'>Submit</Button>
					</form>
				</div>
                <GPAResult>
                    <p>your GPA: {GPA > 0 ? <span>{GPA.toFixed(3)}</span> : GPA}</p>
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
    }
    @media (min-width: 1199px) {
        #old-gpa,
        #old-hour {
            width: 46%;
        }
    }
`;
const Button = styled.button`
	width: 150px;
	padding: 10px;
	margin: 10px auto;
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