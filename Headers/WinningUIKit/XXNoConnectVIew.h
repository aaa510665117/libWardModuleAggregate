//
//  XXNoConnectVIew.h
//  NoNetwork
//
//  Created by 徐然 on 2017/10/17.
//  Copyright © 2017年 syf. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol XXNoConnectVIewDelegate  <NSObject>

- (void)reloadNetworkDataSource:(id)sender;

@end

@interface XXNoConnectVIew : UIView


/**
 提醒标题
 */
@property (nonatomic,copy) NSString * remindersTitle;

/**
 提醒视图
 */
@property (nonatomic,copy) NSString * imageName;

/**
 是否显示重新加载按钮
 */
@property (nonatomic,assign)BOOL isShowReload;

/**
 *  由代理控制器去执行刷新网络
 */
@property (nonatomic, weak) id<XXNoConnectVIewDelegate>delegate;

@end
