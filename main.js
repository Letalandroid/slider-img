let mover = 550;

go.addEventListener('click', () => {
	mover -= 550;

	if (mover > -1100) {
		images.style.left = `${mover}px`;
	} else {
		mover += 550;
	}

});

back.addEventListener('click', () => {
	mover += 550;

	if (mover < 1100) {
		images.style.left = `${mover}px`;
	} else {
		mover -= 550;
	}

});
