//
//  SegmentBarView.h
//  SegmentBarProject
//
//  Created by liaowei on 15/8/13.
//  Copyright (c) 2015年 liaowei. All rights reserved.
//

#import <UIKit/UIKit.h>


@protocol SegmentDelegate <NSObject>

@optional
- (void)barSegmentIndexChanged:(int)index;

@end

@interface SegmentView : UIScrollView

@property(nonatomic,unsafe_unretained) id<SegmentDelegate>clickDelegate;
/** 每个分段对象 **/
@property(nonatomic, strong) NSMutableArray *segmentArray;
/** 底部横线 **/
@property(nonatomic, strong) UIScrollView *lineView;
/** 当前选择的序号 **/
@property(nonatomic, assign) int currentIndex;
/** 上一次选择的序号 **/
@property(nonatomic, assign) NSInteger lastIndex;
@property (nonatomic,assign) BOOL canRoload;
@property (nonatomic,assign) int width;

/** 初始化函数 **/

/**
 有间隔
 */
- (id)initWithFrame:(CGRect)frame andItems:(NSArray *)captions;

/**
 无间隔
 */
- (id)initWithFrame:(CGRect)frame andDivideItems:(NSArray *)captions;

/**
 可滚动
 */
- (id)initWithFrame:(CGRect)frame andScrollItems:(NSArray *)captions;

/** 设置SegmentBar当前位置 **/
- (void)setCurrentSegmentBarIndex:(int)index;

@end
