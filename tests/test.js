describe('getMeter', () => {
    it('Переводит метры в сантиметры', () => {
        const convert_to = 'Cm';
        const value = 1;

        const actual = getMeter(convert_to, value);

        const expected = 100;
        assert.equal(actual, expected);
    });

    it('Переводит метры в дюйм', () => {
        const convert_to = 'In';
        const value = 3;

        const actual = getMeter(convert_to, value);

        const expected = 118.10999999999999;
        assert.equal(actual, expected);
    });

    it('Переводит метры в футы', () => {
        const convert_to = 'Ft';
        const value = 51;

        const actual = getMeter(convert_to, value);

        const expected = 167.33100000000002;
        assert.equal(actual, expected);
    });

    it('Переводит метры в футы', () => {
        const convert_to = 'Ft';
        const value = 51;

        const actual = getMeter(convert_to, value);

        const expected = 167.33100000000002;
        assert.equal(actual, expected);
    });

    it('Переводит метры в метры', () => {
        const convert_to = 'M';
        const value = 51;

        const actual = getMeter(convert_to, value);

        const expected = 51;
        assert.equal(actual, expected);
    });
});

describe('getCentimeters', () => {

    it("Переводит сантиметры в метры", () => {
        const convert_to = 'M';
        const value = 123;

        const actual = getCentimeters(convert_to, value);

        const expected = 1.23;
        assert.equal(actual, expected);
    });

    it('Переводит сантиметры в дюймы', () => {
        const convert_to = 'In';
        const value = 4;

        const actual = getCentimeters(convert_to, value);

        const expected = 0.10160020320040641;
        assert.equal(actual, expected);
    });

    it('Переводит сантиметры в футы', () => {
        const convert_to = 'Ft';
        const value = 8;

        const actual = getCentimeters(convert_to, value);

        const expected = 0.26246719160104987;
        assert.equal(actual, expected);
    });

    it('Переводит сантиметры в сантиметры', () => {
        const convert_to = 'Cm';
        const value = 8;

        const actual = getCentimeters(convert_to, value);

        const expected = 8;
        assert.equal(actual, expected);
    });
});

describe('getInches', () => {
    it('Переводит дюймы в метры', () => {
        const convert_to = 'M';
        const value = 3;

        const actual = getInches(convert_to, value);

        const expected = 0.07620015240030481;
        assert.equal(actual, expected);
    });

    it('Переводит дюймы в сантиметры', () => {
        const convert_to = 'Cm';
        const value = 4;

        const actual = getInches(convert_to, value);

        const expected = 10.16;
        assert.equal(actual, expected);
    });

    it('Переводит дюймы в футы', () => {
        const convert_to = 'Ft';
        const value = 7;

        const actual = getInches(convert_to, value);

        const expected = 0.5833333333333334;
        assert.equal(actual, expected);
    });

    it('Переводит дюймы в дюймы', () => {
        const convert_to = 'In';
        const value = 7;

        const actual = getInches(convert_to, value);

        const expected = 7;
        assert.equal(actual, expected);
    });
});

describe('getFeet', () => {
    it('Переводит футы в метры', () => {
        const convert_to = 'M';
        const value = 1;

        const actual = getFeet(convert_to, value);

        const expected = 0.30478512648582745;
        assert.equal(actual, expected);
    });

    it('Переводит футы в сантиметры', () => {
        const convert_to = 'Cm';
        const value = 5;

        const actual = getFeet(convert_to, value);

        const expected = 152.4;
        assert.equal(actual, expected);
    });

    it('Переводит футы в дюймы', () => {
        const convert_to = 'In';
        const value = 4;

        const actual = getFeet(convert_to, value);

        const expected = 48;
        assert.equal(actual, expected);
    });

    it('Переводит футы в фунты', () => {
        const convert_to = 'Ft';
        const value = 4;

        const actual = getFeet(convert_to, value);

        const expected = 4;
        assert.equal(actual, expected);
    });
});
