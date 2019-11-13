//
//  LTSCalendarScrollView.h
//  LTSCalendar
//
//  Created by 李棠松 on 2018/1/13.
//  Copyright © 2018年 leetangsong. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "LTSCalendarContentView.h"
#import "LTSCalendarWeekDayView.h"
#import "LTSCAlendarEventDelegate.h"

@interface LTSCalendarScrollView : UIScrollView
@property (nonatomic,strong)UITableView *tableView;
@property (nonatomic,strong)LTSCalendarContentView *calendarView;

@property (nonatomic,assign) id<LTSCAlendarEventDelegate> eventDelegate;

@property (nonatomic,strong)UIColor *bgColor;
- (void)scrollToSingleWeek;

- (void)scrollToAllWeek;

- (void)refreshDataWithData:(NSDate *)date;

@end
