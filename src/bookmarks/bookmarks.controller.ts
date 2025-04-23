import { Body, Controller, Get, Param, Post, Query, Delete, Patch } from '@nestjs/common';
import { BookmarksService } from './bookmarks.service';
import { get } from 'http';
import { Bookmark } from './bookmarks.model';
import { createBookMarkDto } from './dto/create-bookmark.dto';
import { GetBookmarkDto } from './dto/get-bookmark.dto';

@Controller('bookmarks')
export class BookmarksController {

    constructor(private bookMarksService: BookmarksService) { }

    // @Get()
    // findAll(): Bookmark[] {
    //     return this.bookMarksService.findAll()
    // }

    @Get('')
    find(@Query() getBookmarkDto: GetBookmarkDto): Bookmark[] {
        if (Object.keys(getBookmarkDto).length) {
            return this.bookMarksService.find(getBookmarkDto)
        }
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

    @Delete(':id')
    deleteBookmark(@Param('id') id: string): void {
        this.bookMarksService.deleteBookmark(id)
    }

    @Patch(':id/description')
    updateBookmarkDescription(@Param('id') id: string, @Body('description') description: string): Bookmark {
        return this.bookMarksService.updateBookmarkDescription(id, description)
    }

}
