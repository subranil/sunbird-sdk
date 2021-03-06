import {UniqueId} from '../../db/util/unique-id';

export enum ProfileType {
    STUDENT = 'student',
    TEACHER = 'teacher'
}

export enum ProfileSource {
    SERVER = 'server',
    LOCAL = 'local'
}

export class Profile {
    uid: string;
    handle: string;
    medium: string[];
    board: string[];
    createdAt: number;
    profileType: ProfileType;
    subject: string[];
    grade: string[];
    gradeValueMap: { [key: string]: any };
    syllabus: string[];
    source: ProfileSource;


    constructor(handle: string, medium: string[],
                board: string[], profileType: ProfileType, subject: string[],
                grade: string[], gradeValueMap: { [p: string]: any },
                syllabus: string[], source: ProfileSource) {
        this.handle = handle;
        this.medium = medium;
        this.board = board;
        this.profileType = profileType;
        this.subject = subject;
        this.grade = grade;
        this.gradeValueMap = gradeValueMap;
        this.syllabus = syllabus;
        this.source = source;
        this.uid = UniqueId.generateUniqueId();
        this.createdAt = Date.now();
    }
}
