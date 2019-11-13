//
//  DataModel.h
//  WinningFoundation
//
//  Created by winning on 2019/5/6.
//  Copyright © 2019年 winning. All rights reserved.
//

#import "BaseModel.h"

NS_ASSUME_NONNULL_BEGIN

@interface DataModel : BaseModel

@property (nonatomic,assign) BOOL success;
@property (nonatomic,strong) id  data;
@property (nonatomic,strong) NSString *action;
@property (nonatomic,strong) NSString *message;
/**
 code  = 0 表示成功
 code = 10000 表示异常
 code > 10000  表示逻辑错误。
 */
@property (nonatomic,assign) int code;

- (id)initWithDictionary:(NSDictionary*)dic;


@end

NS_ASSUME_NONNULL_END
