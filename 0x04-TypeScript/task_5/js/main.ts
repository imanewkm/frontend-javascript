// Define interfaces with brand properties for type safety
interface MajorCredits {
    credits: number;
    readonly _brandMajor: void; // brand property for unique identification
}

interface MinorCredits {
    credits: number;
    readonly _brandMinor: void; // brand property for unique identification
}

/**
 * Sums the credits of two major subjects
 * @param subject1 First major subject
 * @param subject2 Second major subject
 * @returns Total major credits
 */
function sumMajorCredits(
    subject1: MajorCredits,
    subject2: MajorCredits
): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brandMajor: undefined,
    };
}

/**
 * Sums the credits of two minor subjects
 * @param subject1 First minor subject
 * @param subject2 Second minor subject
 * @returns Total minor credits
 */
function sumMinorCredits(
    subject1: MinorCredits,
    subject2: MinorCredits
): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brandMinor: undefined,
    };
}