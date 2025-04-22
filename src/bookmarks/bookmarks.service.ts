import { Injectable } from '@nestjs/common';
import { Bookmark } from './bookmarks.model';
import { v4 as uuid } from 'uuid';
import { createBookMarkDto } from './dto/create-bookmark.dto';

@Injectable()
export class BookmarksService {
    private bookmarks: Bookmark[] = []

    findAll(): Bookmark[] {
        return this.bookmarks
    }

    findById(id: string): Bookmark {
        return this.bookmarks.find((bookmark)=> bookmark.id === id)!
    }

    createBookMark(createBookMarkDto: createBookMarkDto): Bookmark[] {
        const {url, description} = createBookMarkDto;
        const Bookmark: Bookmark = {
            id: uuid(),
            url,
            description
        }

        this.bookmarks.push(Bookmark)

        return this.bookmarks;
    }
}
