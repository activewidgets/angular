
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';

import {Module, Grid} from '../../';

test('test 1', () => {
    expect(typeof Grid).toBe('function');
});

describe('ng testbed', () => {

    let grid, fixture, el;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [Module]
        });

        fixture = TestBed.createComponent(Grid);
        el = fixture.nativeElement;
    });

    it('css', () => {
        expect(el.className).toBe('ax-grid');
    });
});
