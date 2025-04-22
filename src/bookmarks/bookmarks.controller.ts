import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { get } from 'http';
import { Bookmark } from './bookmarks.model';
import { createBookMarkDto } from './dto/create-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {

    constructor(private bookMarksService: BookmarksService) { }

    @Get()
    findAll(): Bookmark[] {
        return this.bookMarksService.findAll()
    }

    @Get(':id')
    finaById(@Param('id') id: string): Bookmark {
        return this.bookMarksService.findById(id)

    }

    @Post()
    createBookMark(@Body() createBookMarkDto: createBookMarkDto): Bookmark[] {
        return this.bookMarksService.createBookMark(createBookMarkDto)
    }
}
