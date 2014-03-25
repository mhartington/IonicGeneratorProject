'use strict';

angular.module('starter.services', [])

.factory('PetService',

	function () {
		var pets = [
			{
				id: 0,
				sku: 'HI902',
				title: 'Automatic Titrator',
				manual: 'http://www.hannainst.com/manuals/manHI_901_902.pdf',
				pages: {
					360: {
						type: 'normal',
						id: '360',
						icon: 'icon icon-360',
						imgs: ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
						content: 'The HI902C is an automatic titrator that complements our wide range of products dedicated to quick and accurate laboratory analysis. HI902C can perform acid/base, potentiometric, ORP, complexometric, precipitation, back titrations and titre determinations.The HI902C dispenses the titrant, detects the endpoint and performs all necessary calculations automatically. This versatile titrator supports up to 100 methods, standard or user defined. When powered on, the instrument initiates an internal diagnostics check and then readies itself for the first titration of the day. A large color LCD screen clearly shows the chosen method and related information. A real-time titration curve can be shown on the display; this feature is useful when new methods are tested or when a procedure needs to be optimized. At the end of the titration, all data, including the graph, are automatically stored in memory and can be copied via the built-in USB drive or through direct connection with a PC.This titrator is supplied with a pack of standard methods or you can create your own. Methods (standard and user) can be upgraded, stored or deleted by connecting the titrator to a PC with Hanna software or USB flash drive. Software updates can also be performed using a USB flash drive.Users can connect pH, ORP or ISE electrodes to the HI902C, as well as create a complete workstation with a PC, monitor, keyboard and printer. The HI902C complies with GLP specifications. All GLP information from each sample can be stored, including ID number, date and time of analysis, electrode ID code, and last calibration date.'
					},

					Feature: {
						type: 'slide',
						id: 'Feature',
						icon: 'icon icon-feature',
						slides: {
							slide1: {
								img: 'burettes',
								content: 'Hanna\'s exclusive Clip-Lock Burette System allows users to exchange reagent burettes quickly and easily to perform different titrations. Also prevents cross contamination.Simply slide out burette and slide second burette into place. Burettes are available in 5, 10, and 25 ml sizes and the size is automatically recognized when inserted.The HI902 also features a highly precise 40,000 step screw drive, piston dosing pump.'
							},

							slide2: {
								img: 'collar',
								content: 'The overhead propeller stirrer holds sensors and dosing tip and is repositioned by an adjustable collar. The stirrer speed is controlled through the software.'
							},

							slide3: {
								img: 'lcd',
								content: 'This large backlit LCD provides a configurable interface with real-time graphing of measurements, customizable on-screen reporting, and customizable titration methods.5.7 (320x240).'
							}
						}

					},

					Data: {
						type: 'normal',
						id: 'Data',
						icon: 'icon icon-data',
						imgs: ['usb'],
						content: 'The built-in USB interface with flash drive allows reports and methods to be downloaded and transerred to a PC. The USB interface also allows for new methods to be uploaded and for software upgrades.'
					},

					Nav: {
						type: 'normal',
						id: 'Nav',
						icon: 'icon icon-button',
						imgs: ['buttons'],
						content: 'Large arrow keys and numeric keypad make navigation and inputting data quick and easy.'
					},

					IO: {
						type: 'normal',
						id: 'I/O',
						imgs: ['io'],
						icon: 'icon icon-io',
						content: 'The HI902 comes with a multitude of I/O\'s for connecting probes, external monitors, keyboards, and even a printers. It also has space for an additional analog board to double the number of inputs for electrodes and probes.'
					}
				}

			},
			{
				id: 1,
				sku: 'HI903',
				title: 'Karl Fischer Titrator',
				manual: 'http://www.hannainst.com/manuals/man_HI903_16_05_2012.pdf',
				pages: {
					360: {
						type: 'normal',
						id: '360',
						icon: 'icon icon-360',
						imgs: ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17'],
						content: 'The HI903 Karl Fischer Volumetric Titrator for moisture analysis is an extension of Hannas\'s highly successful potentiometric titrator platform. The HI903 combines an ultra-high precision titrant delivery system with optically regulated magnetic stirring, sophisticated endpoint determination, dynamic dosing and background drift correction algorithms.The result is an extremely adaptable titrator capable of titrating with superior accuracy and precision even for samples with low moisture content. The HI903 dispenses the titrant, detects the endpoint and performs all necessary calculations automatically.The HI903 comes equipped with a solvent handling system to reduce cell conditioning time and can be connected directly to your laboratory balance via serial interface.The HI03â€™s powerful software and intuitive menus are easily navigated on the large, color LCD display making it simple to view results. Choose from included methods or develop a custom method for almost any application or sample type. Using a USB flash drive or connecting the titrator to the HI900PC application, methods (standard and user) can be upgraded, stored or deleted.'
					},

					Feature: {
						type: 'slide',
						id: 'Feature',
						icon: 'icon icon-feature',
						slides: {
							slide1: {
								img: 'burret',
								content: 'Durable and enclosed conical beaker assembly with beaker desiccant. This is where the titration reaction takes place The cover is a PTFE cover with low water vapor permeability and high resistivity to Karl Fischer reagents.'
							},

							slide2: {
								img: 'vessel',
								content: 'The overhead propeller stirrer holds sensors and dosing tip and is repositioned by an adjustable collar. The stirrer speed is controlled through the software.'
							},

							slide3: {
								img: 'screen',
								content: 'This large backlit LCD provides a configurable interface with real-time graphing of measurements, customizable on-screen reporting, and customizable titration methods. 5.7 (320x240).'
							}
						}

					},

					Data: {
						type: 'normal',
						id: 'Data',
						icon: 'icon icon-data',
						imgs: ['usb'],
						content: 'The built-in USB interface with flash drive allows reports and methods to be downloaded and transerred to a PC. The USB interface also allows for new methods to be uploaded and for software upgrades.'
					},

					Nav: {
						type: 'normal',
						id: 'Nav',
						icon: 'icon icon-button',
						imgs: ['buttons'],
						content: 'Large arrow keys and numeric keypad make navigation and inputting data quick and easy.'
					},

					IO: {
						type: 'normal',
						id: 'I/O',
						imgs: ['back'],
						icon: 'icon icon-io',
						content: 'The HI903 comes with a multitude of I/Os to make various connecting with probes, external monitors, keyboards, as well as a printer to print your results.'
					}
				}

			},
			{
				id: 2,
				sku: 'HI98703',
				title: 'Portable Turbidity Meter',
				manual: 'http://www.hannainst.com/manuals/manHI_98703.pdf',
				pages: {
					360: {
						type: 'normal',
						id: '360',
						icon: 'icon icon-360',
						imgs: ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
						content: 'The HI98703 meets and exceeds the requirements of the USEPA Method 180.1 for wastewater and Standard Method 2130 B for drinking water. The instrument has an EPA compliance reading mode which rounds readings to meet EPA reporting requirements. Users will appreciate the accuracy and sensitivity of this instrument, particularly at very low turbidity levels. This meter features complete GLP (Good Laboratory Practice) functions that allow traceability of the calibration conditions. The last calibration, date and time can be checked at the touch of a button.'
					},

					Feature: {
						type: 'slide',
						id: 'Feature',
						icon: 'icon icon-feature',
						slides: {
							slide1: {
								img: 'cuvette',
								content: 'The HI98703 uses a state of the art optical system that guarantees both high performance and reliable results. This optical system includes a tungsten lament lamp, a scattered light detector and a transmitted light detector. This system meets and exceeds USEPA Method 180.1 and Standard Method 2130 B.'
							},

							slide2: {
								img: 'tag',
								content: 'The HI98703 come equipped with Hanna\'s exclusive Fast Tracker technology. This system takes your measurements and logs and labels with the alphanumeric user-entered location ID. Location, date, time and measurements are logged into the meter which can be transferred to a PC.'
							},

							slide3: {
								img: 'glp',
								content: 'The HI98703 features GLP (Good Laboratory Practice) functions that allow traceability of the calibration conditions. The last calibration, date and time can be checked at the touch of a button.'
							}
						}

					},

					Video: {
						type: 'video',
						id: 'Video',
						icon: 'icon icon-video',
						src: 'http://fast.wistia.net/embed/iframe/n673guu9s3'
					},

					Nav: {
						type: 'normal',
						id: 'Nav',
						icon: 'icon icon-button',
						imgs: ['buttons'],
						content: 'Water resistant keypad (ON/OFF, GLP, AVG, CAL, LIGHT, RCL, LOG/CFM, READ, SETUp/DEL).'
					},

					IO: {
						type: 'normal',
						id: 'I/O',
						imgs: ['io'],
						icon: 'icon icon-io',
						content: 'The HI98703 has inputs for an AC adapter for charging the meter as well as a RS 232 and USB connector for connecting to a PC for data logging.'
					}
				}

			},
			{
				id: '3',
				sku: 'HI4522',
				title: 'Research Grade Meter',
				manual: 'http: //www.hannainst.com/manuals/manHI_4521_22.pdf',
				src: 'http://hannadev.com/video/98703.mp4',
				pages: {
					360: {
						type: 'normal',
						id: '360',
						icon: 'icon icon-360',
						imgs: ['16', '01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15'],
						content: 'HI4522 is a research grade, benchtop instrument that feature 8 measurement ranges: pH, ORP (Oxidation Reduction Potential), ISE, conductivity, resistivity, TDS, salinity and temperature. This instrument incorporates dual channels with a separate temperature input and support the external reference electrodes required by half cell pH and ISE sensors. The user interface is customizable and capable of displaying two channels at the same time, showing the measurements in various modes: basic measurement with or without GLP information, graph or logging data.This instrument offers multi-language support and contextual help is available through a dedicated Help key. Clear tutorial messages and directions are available on-screen to quickly and easily guide users through all measurement and calibration procedures to ensure measurements and calibrations are performed properly.'
					},

					Feature: {
						type: 'slide',
						id: 'Feature',
						icon: 'icon icon-feature',
						slides: {
							slide1: {
								img: 'screen',
								content: 'The screen on the HI4522 is a large backlight LCD with controls to adjust the brightness and contrast. An adjustable time can also be set to turn off the instruments backlight after a period of time.'
							},

							slide2: {
								img: 'channel',
								content: 'The HI4522 has two input channels to simultaneously take two different readings. Channel one is pH, ORP, ISE and channel two is EC,TDS, Resistivity, and Salinity.'
							},

							slide3: {
								img: 'log',
								content: 'The log feature of the HI4522 allows users to view their stored readings and GLP data as well and graphs of those readings.'
							}
						}

					},

					Data: {
						type: 'normal',
						id: 'Data',
						icon: 'icon icon-data',
						imgs: ['data'],
						content: 'The built-in USB interface and RS232 input allows log data to be transferred to the HI92000 PC software.'
					},

					Nav: {
						type: 'normal',
						id: 'Nav',
						icon: 'icon icon-button',
						imgs: ['buttons'],
						content: 'The HI4522 has two rows of input keys with two distinct purpose. The upper row of keys are assigned to the virtual keys placed on the bottom of the LCD, which allow you to perform the displayed function, depending on the current menu. Some Virtual Key functions include: Display, Start Log, Channel, etc. The bottom row are convention keys to perform functions such as choosing your measurement mode, to enter/exit calibration, and to access general information about the selected option / operation'
					},

					IO: {
						type: 'normal',
						id: 'I/O',
						imgs: ['io'],
						icon: 'icon icon-io',
						content: 'The HI4522 comes with a multitude of I/Os to make various connecting with probes, power, and exporting/transfering log data to either USB or HI9200 software. Probe inputs include pH/ORP/ISE, Temperature, EC, and a Reference Electrode.'
					}
				}

			},
			{
				id: 4,
				sku: 'HI84530',
				title: 'Total Acidity Minititrator & pH Meter',
				pages: {
					360: {
						type: 'normal',
						id: '360',
						icon: 'icon icon-360',
						imgs: ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'],
						content: 'The HI84530 is a simple, fast and affordable mini automatic titrator designed for the rapid and accurate analysis of Total Titratable Acidity in water. It features increased accuracy by improving the titrant delivery system and measuring ranges.The HI84530 incorporates a precise piston dosing system, which allows for a highly accurate determination of the amount of titrant used. It is also capable of dynamic dosing, making testing both faster and more accurate. Pump calibrations, performed with the provided Hanna standards, help assure the accuracy of the measurement. An intuitive interface makes the instrument simple to use. A dedicated HELP key guides the user through set-up and calibration sequences, reports instrument status and aids in troubleshooting. This mini titrator includes a pre-programmed analysis method based on the Standard Methods of Water and Wastewater Determination. It uses a powerful algorithm which analyzes the shape of the electrode response in order to determine when the titration reaction has reached completion.'
					},

					Feature: {
						type: 'slide',
						id: 'Feature',
						icon: 'icon icon-feature',
						slides: {
							slide1: {
								img: 'pump',
								content: 'The Piston Driven Dosing Pump allows the user the perform highly precise titrations with an accuracy of 3% of the reading. As well as being highly accurate, the piston driven system allows titrant to delivered dynamically, delivering more at the start of the titration, and less as the end point is reached and reducing the time.'
							},

							slide2: {
								img: 'cover',
								content: 'The Beaker Cover not only protects your sample, but also provides a secure holding for your electrode, tempurature probe, and dispensing tube.'
							},

							slide3: {
								img: 'log',
								content: 'The HI84530 has the ability to take up to 200 log samples and is able to export them via the USB and to a computer.'
							}
						}

					},

					Data: {
						type: 'normal',
						id: 'Data',
						icon: 'icon icon-data',
						imgs: ['data'],
						content: 'The HI84530 has two USB inputs allow for connecting the meter to a PC while the other lets the user store logging data on an external flash drive.'
					},

					Nav: {
						type: 'normal',
						id: 'Nav',
						icon: 'icon icon-button',
						imgs: ['buttons'],
						content: 'The HI84530 intuitive keypad allows for easy access to your current reading, log data, and titrator setup menu.'
					},

					IO: {
						type: 'normal',
						id: 'I/O',
						imgs: ['io'],
						icon: 'icon icon-io',
						content: 'The HI84530 comes with inputs for Temperature Probe, Reference Electrode, BNC connection for a pH.'
					}
				}

			},
			{
				id: 5,
				sku: 'edge',
				title: 'pH • EC • DO',
				manual: 'http://www.hannainst.com//manuals/edge_10_13_web.pdf',
				pages: {

					360: {
						type: 'normal',
						id: '360',
						icon: 'icon icon-360',
						imgs: ['01', '02', '03', '04', '05', '06', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41'],
						content: 'At Hanna, we are proud to introduce the world\'s first edge. edge is thin and lightweight, measuring just 1.2 inch thick and weighing less than 9 ounces. edge has an incredibly wide viewing angle 5.5 inch LCD. edge has a capacitive touch keypad. edge measures pH, conductivity and dissolved oxygen through its unique digital electrodes. These intelligent electrodes are auto-recognized, providing sensor type, calibration data and a serial number, and they connect to edge with an easy to plug-in 3.5mm connector. edge®s versatile design is equally at home in your hand, on a lab bench or mounted on a wall. edge simplifies measurement, configuration, calibration, diagnostics, logging and transferring data to a computer or a USB drive. edge features Hanna\'s exclusive Calibration Check feature to warn you if the bulb of the electrode you are using is not clean or if your buffers are contaminated during calibration. We have also added to Calibration Check: now it warns you if the pH bulb is cracked, and if the junction of the electrode is compromised.'
					},

					Feature: {
						type: 'slide',
						id: 'Feature',
						icon: 'icon icon-feature',
						slides: {
							slide1: {
								img: 'light',
								content: 'edge is incredibly thin and lightweight, measuring a mere 0.5 inches thick and weighing just 8.8 ounces.'
							},

							slide2: {
								img: 'screen',
								content: 'edge features a 5.5 inch LCD display that is clearly viewable from over 5 meters. The large display and it\'s wide 150° viewing angle provide one of the easiest to read LCD\'s in the industry.'
							},

							slide3: {
								img: 'text',
								content: 'edge features clear, full text guides displayed on the bottom of the screen. There is no need to decipher scrambled abbreviations or symbols; these helpful messages make the process quick and easy.'
							},

							slide4: {
								img: 'buttons',
								content: 'The edge features sensitive capacitive touch buttons for accurate keystrokes when navigating the edge\'s menus and screens. Since they are part of the screen, the buttons can never get clogged with sample residue.'
							},

							slide5: {
								img: 'usb',
								content: 'edge includes one standard USB for exporting data with a flash drive. edge also includes one and one micro USB port for connecting to a computer for file transferring and for charging when the cradle is not available. edge is also capable of storing 1000 log records of data on demand, on intervals and on manual or manual stability. Data sets include GLP data, date and time. The maximum number of logs for an interval is 600 provided there is space.'
							},

							slide6: {
								img: 'cradle',
								content: 'Each edge includes a benchtop cradle with an adjustable, swivel electrode holder to hold and charge the edge securely in place at the optimum viewing angle.'
							},

							slide7: {
								img: 'charger',
								content: 'edge\'s internal battery can be recharged by placing it in the wall mount (shown) or in the benchtop cradle. As long as the wall mount or cradle are plugged in via usb, the charging will start automatically.'
							}
						}

					},

					Video: {
						type: 'video',
						id: 'Video',
						icon: 'icon icon-video',
						src: 'http://fast.wistia.net/embed/iframe/mt4j3hvez1'
					},

					Electrode: {
						type: 'slide',
						id: 'Electrode',
						icon: 'icon icon-probe',
						slides: {
							slide8: {
								img: 'electrode',
								content: 'The electrodes used with edge are nearly as advanced as edge itself: feature a built-in microchip that stores calibration information that is automatically retrieved by edge once the electrode is plugged in. Stored pH calibration information includes: buffers used for calibration, date, time, offset and slope characteristic of the electrode. Conductivity calibration information includes: conductivity standards used for calibration, date, time, and cell constant of the sensor. Dissolved oxygen calibration information includes: standards used for calibration, temperature, calibration expiration in days, date, time, and altitude and salinity correction. These digital electrodes also feature an easy to plug in 3.5 mm connector so you never have to worry about the right angle or aligning pins settings.'
							},

							slide9: {
								img: 'probe',
								content: 'edge features a 3.5 mm input. Plugging an electrode in has never been simpler, no alignments, no broken pins, just plug in and get started. edge also automatically recognizes the type electrode plugged in. All electrodes (pH, Conductivity and Dissolved Oxygen) store GLP data that is recognized by edge and have a built in temperature sensor'
							}
						}

					}


				}

			}
		];

		return {
			all: function () {
				return pets;
			},
			get: function (petId) {
				return pets[petId];
			}
		};

	});