// JavaScript source code
//Created by Paul George
var x;
var obj;

function countdowntimer(target) {
	var today, status = "",
		yearDiff, monthDiff, dayDiff, hourDiff, minDiff, secDiff, decades = 0,
		centuries = 0;
	today = new Date();
	yearDiff = target.getFullYear() - today.getFullYear();
	monthDiff = (target.getMonth() + 1) - (today.getMonth() + 1);
	dayDiff = target.getDate() - today.getDate();
	hourDiff = target.getHours() - today.getHours();
	minDiff = target.getMinutes() - today.getMinutes();
	secDiff = target.getSeconds() - today.getSeconds();
	if (today < target) {
		status = " more";
		//Making variations according to the msecods  minute, hour date and month
		if (secDiff < 0) {
			secDiff += 60;
			minDiff--;
		}
		if (minDiff < 0) {
			minDiff += 60;
			hourDiff--;
		}
		if (hourDiff < 0) {
			hourDiff += 24;
			dayDiff--;
		}
		if (dayDiff < 0) {
			if (today.getMonth() + 1 == 1 || today.getMonth() + 1 == 3 || today.getMonth() + 1 == 5 || today.getMonth() + 1 == 7 || today.getMonth() + 1 == 8 || today.getMonth() + 1 == 10 || today.getMonth() + 1 == 12) {
				dayDiff += 31;
			} else if (today.getMonth() + 1 === 2) {
				if (today.getFullYear() % 4 === 0) {
					dayDiff += 29;
				} else {
					dayDiff += 28;
				}
			} else {
				dayDiff += 30;
			}
			monthDiff--;

		}
		if (monthDiff < 0) {
			monthDiff += 12;
			yearDiff--;
		}
	} else {
		status = " overdue";
		if (secDiff > 0) {
			secDiff = 60 - secDiff;
			minDiff++;
		}
		if (minDiff > 0) {
			minDiff = 60 - minDiff;
			hourDiff++;
		}
		if (hourDiff > 0) {
			hourDiff = 24 - hourDiff;
			dayDiff++;
		}
		if (dayDiff > 0) {
			if (today.getMonth() + 1 == 1 || today.getMonth() + 1 == 3 || today.getMonth() + 1 == 5 || today.getMonth() + 1 == 7 || today.getMonth() + 1 == 8 || today.getMonth() + 1 == 10 || today.getMonth() + 1 == 12) {
				dayDiff = 31 - dayDiff;
			} else if (today.getMonth() + 1 === 2) {
				if (today.getFullYear() % 4 === 0) {
					dayDiff = 29 - dayDiff;
				} else {
					dayDiff = 28 - dayDiff;
				}
			} else {
				dayDiff = 30 - dayDiff;
			}
			monthDiff++;
		}
		if (monthDiff > 0) {
			monthDiff = 12 - monthDiff;
			yearDiff++;
		}
		while (yearDiff >= 10) {
			yearDiff -= 10;
			decades++;
		}
		while (decades >= 10) {
			decades -= 10;
			centuries++;
		}
		yearDiff = Math.abs(yearDiff);
		monthDiff = Math.abs(monthDiff);
		dayDiff = Math.abs(dayDiff);
		hourDiff = Math.abs(hourDiff);
		minDiff = Math.abs(minDiff);
		secDiff = Math.abs(secDiff);
	}

	while (yearDiff >= 10) {
		yearDiff = yearDiff - 10;
		decades++;
	}
	while (decades >= 10) {
		decades -= 10;
		centuries++;
	}
	if (!yearDiff && !monthDiff && !dayDiff && !hourDiff && !minDiff && !secDiff) {
		status = "Times UP!!!";
	}
	var centString = centuries ? (centuries + (centuries == 1 ? " century " : " centuries ")) : "";
	var decString = decades ? (decades + (decades == 1 ? " decade " : " decades ")) : "";
	var yString = yearDiff ? (yearDiff + (yearDiff == 1 ? " year " : " years ")) : "";
	var moString = monthDiff ? (monthDiff + (monthDiff == 1 ? " month " : " months ")) : "";
	var dString = dayDiff ? (dayDiff + (dayDiff == 1 ? " day " : " days ")) : "";
	var hString = hourDiff ? (hourDiff + (hourDiff == 1 ? " hour " : " hours ")) : "";
	var mString = minDiff ? (minDiff + (minDiff == 1 ? " minute " : " minutes ")) : "";
	var sString = secDiff ? (secDiff + (secDiff == 1 ? " second " : " seconds ")) : "";
	return centString + decString + yString + moString + dString + hString + mString + sString + status;
	/*return decString + yString + moString + dString;
	if (decString || yString || moString || dString) {
		return decString + yString + moString + dString;
	} else if (hString) {
		return hString;
	} else {
		return mString;
	}
	return dString;*/
}
$().init.prototype.countDown = function (target) {
	obj = this;
	$(obj).html(countdowntimer(target));
	x = setInterval(function () {
		$(obj).html(countdowntimer(target));
	}, 1000);
};
