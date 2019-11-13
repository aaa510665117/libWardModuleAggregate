//
//  LTSCalendarManager.h
//  LTSCalendar
//
//  Created by 李棠松 on 2018/1/13.
//  Copyright © 2018年 leetangsong. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "LTSCalendarScrollView.h"
#import "LTSCalendarEventSource.h"
#import "LTSCAlendarEventDelegate.h"

@interface LTSCalendarManager : NSObject
@property (nonatomic,strong) LTSCalendarScrollView *calenderScrollView;

@property (nonatomic,strong) LTSCalendarWeekDayView *weekDayView;

@property (weak, nonatomic) id<LTSCalendarEventSource> eventSource;

@property (nonatomic,assign) id<LTSCAlendarEventDelegate> eventDelegate;

@property (nonatomic,strong,readonly) NSDate *currentSelectedDate;

- (void)refreshDataWith:(NSDate *)date;

///回到固定某天
- (void)goToDate:(NSDate *)date;

/// 重新加载外观
- (void)reloadAppearanceAndData;

///  前一页。上个月
- (void)loadPreviousPage;
///   下一页 下一个月

- (void)loadNextPage;
- (void)showSingleWeek;
- (void)showAllWeek;
@end
